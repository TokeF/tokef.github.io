import Image from "next/image";

const hobbyProjects = [
  {
    title: "Weather Dashboard",
    description:
      "A real-time weather dashboard using OpenWeatherMap API and React.",
    image: "/assets/collaboration.png",
    link: "https://github.com/yourusername/weather-dashboard",
  },
  {
    title: "Recipe Finder",
    description:
      "Find recipes by ingredients. Built with Next.js and Spoonacular API.",
    image: "/assets/collaboration.png",
    link: "https://github.com/yourusername/recipe-finder",
  },
];

export default function HobbyProjects() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Check out some of my hobby projects
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Here are a few fun projects I’ve built in my spare time. Click to view
        the code or try them out!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hobbyProjects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
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
