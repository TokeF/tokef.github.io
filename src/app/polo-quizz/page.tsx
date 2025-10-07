"use client";
import { useState } from "react";

interface QuizQuestion {
  image: string;
  description: string;
  answers: string[];
}

const quizQuestions: QuizQuestion[] = [
  {
    image: "/assets/polo-quizz/main01_part01.png",
    description:
      "Arm forward and bent upwards with palm open and facingsideways head level.",
    answers: ["Start", "Infringement"],
  },
  {
    image: "/assets/polo-quizz/main01_part02.png",
    description: "Arms crossed in front of chest. Palms out.",
    answers: [
      "COMPLETION OF HALF / FULL TIME",
      "HALF TIME",
      "FULL TIME",
      "MATCH END",
      "GAME END",
    ],
  },
  {
    image: "/assets/polo-quizz/main01_part03.png",
    description: "Arms extended, palms together. Point to centre of field.",
    answers: ["GOAL"],
  },
  {
    image: "/assets/polo-quizz/main01_part04.png",
    description: "Repeated crossing of arms at thigh level.Palms open.",
    answers: ["DISALLOWED GOAL", "CANCELLED GOAL"],
  },
  {
    image: "/assets/polo-quizz/main01_part05.png",
    description: "Point at sideline. Other arm showing direction of play.",
    answers: ["SIDELINE THROW", "CORNER THROW", "CORNER", "SIDELINE"],
  },
  {
    image: "/assets/polo-quizz/main02_part01.png",
    description:
      "Point open hand, arm extended along goal line. Other arm showing direction of play.",
    answers: ["GOAL LINE THROW", "GOAL THROW"],
  },
  {
    image: "/assets/polo-quizz/main02_part02.png",
    description: "Form T with hands above head.",
    answers: ["TIME OUT"],
  },
  {
    image: "/assets/polo-quizz/main02_part03.png",
    description:
      "Arms extended forward at shoulder level, fists clenched,thumbs up.",
    answers: ["REFEREE'S BALL"],
  },
  {
    image: "/assets/polo-quizz/main02_part04.png",
    description:
      "Hold one arm up in the air fist clenched for the period of two seconds, and then point at the position where the free shot has to be taken. Other arm showing direction of play.",
    answers: ["OBSTRUCTION"],
  },
  {
    image: "/assets/polo-quizz/main02_part05.png",
    description:
      "Hold clenched fist against hip for the period of two seconds, and then point at the position where the free shot has to be taken. Other arm showing direction of play.",
    answers: ["ILLEGAL KAYAK TACKLE", "ILLEGAL TACKLE"],
  },
  {
    image: "/assets/polo-quizz/main03_part01.png",
    description:
      "Hold hand up at side at head level, palm forward. Spread all fingers for the period of two seconds, and then point at the position where the free shot has to be taken. Other arm showing direction of play.",
    answers: ["5 SECONDS", "POSSESSION"],
  },
  {
    image: "/assets/polo-quizz/main03_part02.png",
    description:
      "The side of the other hand repeatedly chops the upper arm showing in direction of play for the period of two seconds, and then point at the position where the free shot has to be taken.",
    answers: ["ILLEGAL USE OF PADDLE", "ILLEGAL PADDLE", "PADDLE ERROR"],
  },
  {
    image: "/assets/polo-quizz/main03_part03.png",
    description:
      "One arm elbow bent, rotating in a circular motion across the body at hip level continuously to a maximum of five seconds. Other arm showing direction of play.",
    answers: ["PLAY ON", "ADVANTAGE"],
  },
  {
    image: "/assets/polo-quizz/main03_part04.png",
    description:
      "Arm extended, palm open, pointing in direction of play parallel to side of field. Other arm showing offence signal.",
    answers: ["FREE THROW"],
  },
  {
    image: "/assets/polo-quizz/main03_part05.png",
    description:
      "Arm extended, index finger pointing at goal in direction of attack. Other arm showing offence signal.",
    answers: ["FREE SHOT"],
  },
  {
    image: "/assets/polo-quizz/main04_part01.png",
    description:
      "Both arms extended index fingers together and pointing at goal.",
    answers: ["GOAL PENALTY SHOT", "PENALTY SHOT"],
  },
  {
    image: "/assets/polo-quizz/main04_part02.png",
    description:
      "One index finger on one hand waved from side to side repeatedly.",
    answers: ["UNSPORTING BEHAVIOUR"],
  },
  {
    image: "/assets/polo-quizz/main04_part03.png",
    description:
      "Hold one arm up in the air, fist clenched and moving vertically for the period of two seconds, and then point at the position where the free shot must be taken.",
    answers: [
      "Illegal Holding",
      "HOLDING",
      "Illegal Hand Tackle",
      "Hand Tackle",
    ],
  },
  {
    image: "/assets/polo-quizz/main04_part04.png",
    description:
      "Show the red card only, holding the card in one hand,crossed arms with clenched fist above the shoulder (so that it is visible in front and behind) and verbal statement “ejection red” to the player.",
    answers: ["Ejection Red Card"],
  },
];

export default function Page() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  // Filter out questions with empty descriptions for the quiz
  const validQuestions = quizQuestions.filter(
    (q) => q.description.trim() !== ""
  );

  const isAnswerCorrect = (
    userAnswer: string,
    correctAnswers: string[]
  ): boolean => {
    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    return correctAnswers.some(
      (answer) => answer.toLowerCase().trim() === normalizedUserAnswer
    );
  };

  // Calculate results
  const getResults = () => {
    let correctCount = 0;
    const results = validQuestions.map((question, index) => {
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
    return { results, correctCount, totalQuestions: validQuestions.length };
  };

  const handleNext = () => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = currentAnswer;
    setUserAnswers(updatedAnswers);

    // Move to next question or finish quiz
    if (currentQuestion < validQuestions.length - 1) {
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
  if (quizCompleted && !showAnswers) {
    const { correctCount, totalQuestions } = getResults();
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    return (
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
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
              onClick={() => setShowAnswers(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Answers
            </button>
            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Answer review screen
  if (showAnswers) {
    const { results } = getResults();

    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">Answer Review</h1>
          <button
            onClick={restartQuiz}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Take Quiz Again
          </button>
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
                    <strong>Description:</strong> {result.question.description}
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

        <div className="mt-8 text-center">
          <button
            onClick={restartQuiz}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Take Quiz Again
          </button>
        </div>
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
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            About This Quiz
          </h2>
          <p className="text-gray-700 mb-4">
            Test your knowledge of canoe polo referee signals! This quiz
            features images and descriptions of various referee gestures from
            ICF 2025 Rule Book.
          </p>
          <p className="text-gray-700 mb-6">
            The quiz covers common referee signals including start/infringement
            calls, goal signals, time management, and various throw situations.
            Ideal for anyone wanting to improve their understanding of the game.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            <strong>Instructions:</strong> Look at each image and description,
            then type your answer in English in the text field. Multiple correct
            answers may be accepted for each question.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={startQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Begin Quiz
          </button>
        </div>
      </main>
    );
  }

  const question = validQuestions[currentQuestion];

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-4 text-center">
        <span className="text-white text-sm">
          Question {currentQuestion + 1} of {validQuestions.length}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            {currentQuestion === validQuestions.length - 1
              ? "Finish Quiz"
              : "Next"}
          </button>
        </div>
      </div>
    </main>
  );
}
