export function validateAnswer(
  userAnswer: string,
  correctAnswers: string[]
): boolean {
  // case and whitespace is handled in isFuzzyBagOfWordsMatch
  for (const correctAnswer of correctAnswers) {
    // Allow up to 20% of chars to be different
    const threshold = Math.round(correctAnswer.length * 0.2);
    if (isFuzzyBagOfWordsMatch(userAnswer, correctAnswer, threshold)) {
      return true;
    }
  }
  return false;
}

export function isFuzzyBagOfWordsMatch(
  userAnswer: string,
  correctAnswer: string,
  threshold: number
): boolean {
  userAnswer = userAnswer.toLowerCase();
  correctAnswer = correctAnswer.toLowerCase();
  // First just test regular levenshtein to include white space differences. Othwerwise test each word individually.
  if (levenshteinDist(userAnswer, correctAnswer) <= threshold) {
    return true;
  }

  const userWords = userAnswer.split(/\s+/);
  const correctWords = correctAnswer.split(/\s+/);
  const unmatchedCorrectWords = [...correctWords];

  // Attempt to match each input word with a correct word, irrespective of order.
  // If all input words match, return true.
  // Words are considered matching if their Levenshtein distance is within the threshold.
  for (const userWord of userWords) {
    const idxOfMatch = unmatchedCorrectWords.findIndex(
      (correctWord) => levenshteinDist(userWord, correctWord) <= threshold
    );
    if (idxOfMatch !== -1) {
      unmatchedCorrectWords.splice(idxOfMatch, 1);
    }
  }
  return unmatchedCorrectWords.length === 0;
}

export function levenshteinDist(a: string, b: string): number {
  const n: number = a.length;
  const m: number = b.length;

  if (n === 0) return m;
  if (m === 0) return n;

  // +1 for empty string prefix, first row and column is 0..n and 0..m
  let prevRow = Array.from({ length: n + 1 }, (_, i) => i);
  let currRow = new Array(n + 1).fill(0);

  for (let i = 1; i <= m; i++) {
    currRow[0] = i;
    for (let j = 1; j <= n; j++) {
      if (a[j - 1] === b[i - 1]) {
        currRow[j] = prevRow[j - 1]; // No cost, copy previous cost
      } else {
        currRow[j] =
          1 +
          Math.min(
            prevRow[j], // Delete char from a
            currRow[j - 1], // Insert char at end of a
            prevRow[j - 1] // Substitute char in a with char from b
          );
      }
    }
    [prevRow, currRow] = [currRow, prevRow];
  }

  return prevRow[n];
}
