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
      "Show the red card only, holding the card in one hand,crossed arms with clenched fist above the shoulder (so that it is visible in front and behind) and verbal statement “<answer>” to the player.",
    answers: ["Ejection Red Card", "EJECTION RED", "RED EJECTION"],
  },
];
