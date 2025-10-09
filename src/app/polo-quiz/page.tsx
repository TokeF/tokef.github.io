"use client";
import { useState } from "react";
import { quizQuestions as fullQuestionSet } from "./quizz-data";
import { validateAnswer } from "./quizz-answer-validator";

export default function Page() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const quizQuestions = fullQuestionSet.slice(0, 18);

  const isAnswerCorrect = (
    userAnswer: string,
    correctAnswers: string[]
  ): boolean => {
    return validateAnswer(userAnswer, correctAnswers);
  };

  const getResults = () => {
    let correctCount = 0;
    const results = quizQuestions.map((question, index) => {
      const userAnswer = userAnswers[index] || "";
      const isCorrect = isAnswerCorrect(userAnswer, question.answers);
      if (isCorrect) correctCount++;
      return {
        question,
        userAnswer,
        isCorrect,
        correctAnswers: question.answers,
      };
    });
    return { results, correctCount, totalQuestions: quizQuestions.length };
  };

  const handleNext = () => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = currentAnswer;
    setUserAnswers(updatedAnswers);

    // Move to next question or finish quiz
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentAnswer(userAnswers[currentQuestion + 1] || "");
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      // Save current answer
      const updatedAnswers = [...userAnswers];
      updatedAnswers[currentQuestion] = currentAnswer;
      setUserAnswers(updatedAnswers);

      setCurrentQuestion(currentQuestion - 1);
      setCurrentAnswer(userAnswers[currentQuestion - 1] || "");
    }
  };

  const startQuiz = () => {
    setStarted(true);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setCurrentAnswer("");
    setQuizCompleted(false);
    setShowAnswers(false);
  };

  const restartQuiz = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setCurrentAnswer("");
    setQuizCompleted(false);
    setShowAnswers(false);
  };

  // Results screen
  if (quizCompleted) {
    const { correctCount, totalQuestions, results } = getResults();
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Results Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center mb-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Quiz Complete!
          </h1>

          <div className="mb-8">
            <div
              className="text-6xl font-bold mb-4"
              style={{
                color:
                  percentage >= 70
                    ? "#10B981"
                    : percentage >= 50
                    ? "#F59E0B"
                    : "#EF4444",
              }}
            >
              {percentage}%
            </div>
            <p className="text-xl text-gray-700 mb-2">
              You got{" "}
              <span className="font-bold text-green-600">{correctCount}</span>{" "}
              out of <span className="font-bold">{totalQuestions}</span>{" "}
              questions correct!
            </p>

            {percentage >= 80 && (
              <p className="text-lg text-green-600 font-semibold">
                Excellent work! 🎉
              </p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-lg text-yellow-600 font-semibold">
                Good job! 👍
              </p>
            )}
            {percentage < 60 && (
              <p className="text-lg text-red-600 font-semibold">
                Is this Aarhus Lobster Level? Keep practicing! 📚
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAnswers ? "Hide Answers" : "View Answers"}
            </button>
            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>

        {/* Answer Review Section - Shows when showAnswers is true */}
        {showAnswers && (
          <div>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Answer Review
              </h2>
            </div>

            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img
                        src={result.question.image}
                        alt={`Question ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-md"
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                      />
                    </div>

                    <div className="md:w-2/3">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        Question {index + 1}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        <strong>Description:</strong>{" "}
                        {result.question.description}
                      </p>

                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-gray-600">
                            Your Answer:
                          </span>
                          <div
                            className={`mt-1 p-2 rounded ${
                              result.isCorrect
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {result.userAnswer || "(No answer provided)"}
                            {result.isCorrect ? " ✓" : " ✗"}
                          </div>
                        </div>

                        <div>
                          <span className="text-sm font-medium text-gray-600">
                            Correct Answer(s):
                          </span>
                          <div className="mt-1 p-2 bg-green-50 text-green-800 rounded">
                            {result.correctAnswers.join(", ")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    );
  }

  if (!started) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          Canoe Polo Referee Signals Quiz
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Test your canoe polo referee signal knowledge!
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Instructions:</strong> Each question features an image and a
            description of a referee signal. Identify the correct English term
            for the signal, and type it in the answer box.
          </p>

          <p className="text-sm text-gray-700 mb-4 italic">
            Answers are not case-sensitive. Minor spelling errors, and word
            permutations are accepted. E.g. "Cancelled Goal" and "gool
            cancelled" are both accepted.
          </p>

          <div className="text-center">
            <button
              onClick={startQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Begin Quiz
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Example</h2>
          <div className="bg-gray-200 rounded-xl shadow-lg px-8 sm:px-6 py-2 sm:py-6">
            <div className="mb-4 text-center">
              <img
                src={fullQuestionSet[18].image}
                className="max-w-3xs max-h-3xs mx-auto rounded-lg shadow-md"
              />
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">
                What referee signal is being shown?
              </h2>
              <p className="text-md text-gray-700 mb-4">
                <strong>Description:</strong> {fullQuestionSet[18].description}
              </p>
            </div>

            {/* Answer Input */}
            <div className="mb-6">
              <label
                htmlFor="answer"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Answer:
              </label>
              <div className="w-full px-3 py-2 border rounded-md bg-green-100 text-green-800 font-medium">
                {fullQuestionSet[18].answers[0]}
              </div>
              <p className="block text-sm font-medium text-gray-700 italic mt-2">
                Also accepted: {fullQuestionSet[18].answers.slice(1).join(", ")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-bold mb-2 text-gray-900">About</h2>
          <p className=" text-gray-700 mb-2">
            This quiz features images and descriptions of various referee
            gestures from the ICF 2025 Rule Book.
          </p>
          <p className=" text-gray-700 mb-6">
            The quiz covers common referee signals including start/infringement,
            goal signals and fouls. Ideal for anyone wanting to improve their
            understanding of the game.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-bold mb-2 text-gray-900">
            Getting nerdy
          </h2>
          <h3 className="text-lg font-bold mb-1 text-gray-900 italic">
            But how are 'close enough' answers handled?
          </h3>
          <p className=" text-gray-700 mb-2">
            Consider a correct answer "Time Out". A given input "Timeout" or
            "Time Outt", should be considered a correct answer, as the quiz aim
            to validate semantic understanding, and not exact grammar. In
            computer science such a match is known as 'approximate string
            matching' or 'fuzzy string matching'.
          </p>
          <p className=" text-gray-700 mb-2">
            One way to achieve this, and which is used in this quiz, is through
            the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Levenshtein_distance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Levenshtein distance
            </a>{" "}
            algorithm. The algoritm calculates the minimum number of
            single-character edits required to change one word into another.
            E.g. "Time Out" to "Timeout" has a distance of 1 (removing the
            space). By defining an acceptable error threshold, relative to the
            word length, minor mistakes can be considered a match. For example,
            a threshold of 20% for a 10-character word, would allow two
            character erros.
          </p>
          <h3 className="text-lg font-bold mb-1 text-gray-900 italic">
            Sure, but what about sentence ordering?
          </h3>
          <p className=" text-gray-700 mb-2">
            Sentence ordering is handled by comparing 'bag-of-words'. Two
            sentences are considered identical if they contain the same words,
            irrespective of order. E.g. "Goal Disallowed" and "Disallowed Goal"
            are considered identical. Programmatically this is simply achieved
            by using sets. Additionally, each word is compared using the
            previously described Levenshtein distance.
          </p>
          <h3 className="text-lg font-bold mb-1 text-gray-900 italic">
            Alright alright, but what about synonyms?
          </h3>
          <p className=" text-gray-700 mb-2">
            To some extent synonyms are handled by providing multiple correct
            options. Generally however, synonyms such as "Foul" and "Penalty",
            must be related through semantic matching. This is a more complex
            problem, and not handled in this quiz. One way to achieve this, is
            to use word embeddings, ie. mapping words to high dimensional
            vectors, and comparing their similarity. This is part of how LLM's
            like ChatGPT handle "understanding" of words.
          </p>
        </div>
      </main>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <main className="max-w-2xl mx-auto py-4 px-8 md:py-8 md:px-32 ">
      <div className="mb-4 text-center">
        <span className="text-white text-sm">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6 text-center">
          <img
            src={question.image}
            alt={`Water polo referee signal ${currentQuestion + 1}`}
            className="max-w-full h-auto mx-auto rounded-lg shadow-md"
            style={{ maxHeight: "400px" }}
          />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            What referee signal is being shown?
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Description:</strong> {question.description}
          </p>
        </div>

        {/* Answer Input */}
        <div className="mb-6">
          <label
            htmlFor="answer"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Answer:
          </label>
          <input
            type="text"
            id="answer"
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            placeholder="Enter your answer..."
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {currentQuestion === quizQuestions.length - 1
              ? "Finish Quiz"
              : "Next"}
          </button>
        </div>
      </div>
    </main>
  );
}
