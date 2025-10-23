import {
  validateAnswer,
  levenshteinDist,
  isFuzzyBagOfWordsMatch,
} from "./quizz-answer-validator";

// Test Levenshtein Distance function
test("should return 0 for identical strings", () => {
  expect(levenshteinDist("goal", "goal")).toBe(0);
});

test("should return length when one string is empty", () => {
  expect(levenshteinDist("", "hello")).toBe(5);
  expect(levenshteinDist("hello", "")).toBe(5);
});

test("should handle single character difference", () => {
  expect(levenshteinDist("goal", "gool")).toBe(1);
  expect(levenshteinDist("kick", "pick")).toBe(1);
});

test("should handle multiple character differences", () => {
  expect(levenshteinDist("kitten", "sitting")).toBe(3);
  expect(levenshteinDist("goal", "penalty")).toBe(5);
});

test("should handle insertion and deletion", () => {
  expect(levenshteinDist("goa", "goal")).toBe(1); // insert 'l'
  expect(levenshteinDist("goal", "goa")).toBe(1); // delete 'l'
});

// Test validateAnswer function
test("should validate exact matches", () => {
  expect(validateAnswer("goal", ["goal"])).toBe(true);
});

test("should validate case insensitive matches", () => {
  expect(validateAnswer("GOAL", ["goal"])).toBe(true);
});

test("should validate with typos", () => {
  expect(validateAnswer("gool", ["goal"])).toBe(true);
});

test("should reject typos in short string", () => {
  expect(validateAnswer("ga", ["go"])).toBe(false);
});

test("should reject completely different answers", () => {
  expect(validateAnswer("penalty", ["goal"])).toBe(false);
});

// test isFuzzyBagOfWordsMatch
test("shoudl handle threshold", () => {
  expect(isFuzzyBagOfWordsMatch("gool", "goal", 0)).toBe(false);
  expect(isFuzzyBagOfWordsMatch("gool", "goal", 1)).toBe(true);
  expect(isFuzzyBagOfWordsMatch("aaa", "bbb", 3)).toBe(true);
  expect(isFuzzyBagOfWordsMatch("aaa", "bbbb", 3)).toBe(false);
  expect(isFuzzyBagOfWordsMatch("timeout", "Time Out", 1)).toBe(true);
});
