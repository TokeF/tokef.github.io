export interface QuizQuestion {
  image: string;
  description: string;
  answers: string[]; // Accept multiple correct answers
}

export const quizQuestions: QuizQuestion[] = [
  {
    image: "/assets/polo-quizz/main01_part01.png",
    description:
      "Arm forward and bent upwards with palm open and facingsideways head level.",
    answers: ["Start", "Infringement"],
  },
  {
    image: "/assets/polo-quizz/main01_part01.png",
    description: "",
    answers: [],
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
    description: "",
    answers: [],
  },
  {
    image: "/assets/polo-quizz/main02_part01.png",
    description: "Point at sideline. Other arm showing direction of play.",
    answers: ["SIDELINE THROW", "CORNER THROW", "CORNER", "SIDELINE"],
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

export default function Page() {}
