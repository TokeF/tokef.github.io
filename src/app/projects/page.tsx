import Image from "next/image";

const hobbyProjects = [
  {
    title: "Word of the Day",
    description:
      "A fun react native mobile app, displaying a new gen-z word every day.",
    image: "/assets/projects.png",
    link: "https://github.com/TokeF/word-of-day",
  },
  {
    title: "Whist point calculator",
    description:
      "React native app to keep track of scores in the Whist card game.",
    image: "/assets/whist.gif",
    link: "https://github.com/yourusername/recipe-finder",
  },
  {
    title: "Pendulum Simulation",
    description: "Simulation of pendulum motion. I have background in physics.",
    image: "/assets/pendulum2.png",
    link: "/pendulum",
  },
  {
    title: "Personal Website",
    description: "To display portfolio and showcase various projects.",
    image: "/assets/webpage.png",
    link: "/pendulum",
  },
  {
    title: "Knight Launcher Game",
    description:
      'Web-based mini-game where you launch a knight from a ballista across a battlefield. The purpose is simply to try out "vibe" coding. Work in progress...',
    image: "/assets/knightlauncher.png",
    link: "/knight-launcher",
  },
];

export default function HobbyProjects() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl text-white font-bold mb-2 text-center">
        Check out some of my hobby projects
      </h1>
      <p className="text-l text-white mb-8 text-center">
        For more details click the button!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hobbyProjects.map((project) => (
          <div
            key={project.title}
            className="bg-[#ecdfcc] rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-4 py-2 bg-gradient-to-r from-[#AE445A] to-[#4B4376] text-white rounded hover:scale-105 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
