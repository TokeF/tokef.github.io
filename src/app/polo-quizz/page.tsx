"use client";
import { useState } from "react";

export interface QuizQuestion {
  image: string;
  description: string;
  answers: string[];
}

export const quizQuestions: QuizQuestion[] = [
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
    answers: ["DISALLOWED GOAL"],
  },
  {
    image: "/assets/polo-quizz/main01_part05.png",
    description: "Point at sideline. Other arm showing direction of play.",
    answers: ["SIDELINE THROW", "CORNER THROW", "CORNER", "SIDELINE"],
  },
  {
    image: "/assets/polo-quizz/main02_part01.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main02_part02.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main02_part03.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main02_part04.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main02_part05.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main03_part01.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main03_part02.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main03_part03.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main03_part04.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main03_part05.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main04_part01.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main04_part02.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main04_part03.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main04_part04.png",
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main04_part05.png",
    description: "",
    answers: [],
  },
];

export default function Page() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");

  // Filter out questions with empty descriptions for the quiz
  const validQuestions = quizQuestions.filter(
    (q) => q.description.trim() !== ""
  );

  const handleNext = () => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = currentAnswer;
    setUserAnswers(updatedAnswers);

    // Move to next question or finish quiz
    if (currentQuestion < validQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentAnswer(userAnswers[currentQuestion + 1] || "");
    } else {
      alert("Quiz completed!");
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
  };

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
