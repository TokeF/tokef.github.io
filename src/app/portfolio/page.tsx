interface Project {
  year: string;
  title: string;
  client?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    year: "2025",
    title: "Standardized Data Pipeline",
    client: "Vestas Wind Systems",
    description:
      "Created a vendor-agnostic data pipeline and frontend management tool, allowing seamless integration of new data providers without altering core business logic.",
    highlights: [
      "Refactored legacy SQL models and C# services, to eliminate dependencies on specific input data formats, enabling greater flexibility.",
      "Developed and implemented a generalized, domain-focused, data model that standardized data handling across different vendors.",
      "Created a UI in Angular, allowing users to manage data imports, view available data, track version updates, and visualize error messages. Automatic testing using Cypress. State management using NgRx.",
    ],
    technologies: [
      "C#",
      "ASP.NET",
      "SQL",
      "Entity Framework",
      "Angular",
      "Cypress",
      "NgRx",
      "MSW",
    ],
  },
  {
    year: "2024",
    title: "Migration of On-Premise Servers to Cloud",
    client: "Vestas Wind Systems",
    description:
      "Migrated a critical application from on-premise Windows servers to Azure. The system, part of a PLM toolset managing windmill configurations, included an SQL server, ASP.NET backend, and Angular frontend.",
    highlights: [
      "Planned and executed full migration across dev/test/prod environments.",
      "Achieved less than 3 hours downtime, ensuring seamless transition of the backend and frontend to the cloud.",
      "Enhanced performance and scalability by leveraging Kubernetes in the cloud environment.",
      "Decommissioned legacy infrastructure, reducing maintenance costs.",
    ],
    technologies: [
      "ASP.NET",
      "Angular",
      "Docker",
      "Kubernetes",
      "SQL Server",
      "Azure SQL",
    ],
  },
  {
    year: "2020–2023",
    title: "Team Management",
    client: "Aleta",
    description:
      "Led and developed a high-performing DevOps team. I led initiatives like pair programming, hackathons, and task prioritization to support knowledge sharing and ensure alignment with project goals.",
    highlights: [
      "Enhanced team collaboration and communication, resulting in increased efficiency and more innovative solutions.",
      "Strengthened team skills and morale through regular collaborative activities, contributing to successful project delivery and high-quality outcomes.",
      "Conducted hiring interviews, reviews, retrospectives, and one-on-ones.",
    ],
    technologies: [
      "Situational leadership",
      "Performance reviews",
      "Kanban",
      "Planning Poker",
      "SWOT",
      "Pair Programming",
      "Hackathons",
    ],
  },
  {
    year: "2021",
    title: "Financial Data API Gateway",
    client: "Aleta",
    description:
      "Developed an API gateway service that automated the import and parsing of over 1,000+ daily financial data points from a third-party vendor. The service integrated with the vendor’s API, processed the data, and made it available for internal systems, reducing data availability time by 2 hours.",
    highlights: [
      "Cut data latency by 2 hours and reduced manual processing.",
      "Added validation, error handling, and retry logic.",
      "Edge case handling data augmentation for malformed data.",
    ],
    technologies: [
      "C#",
      "XML",
      "JSON",
      "Azure Functions",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    year: "2020",
    title: "Data Parser",
    client: "Aleta",
    description:
      "Developed a configurable CSV parser for efficient and user friendly data ingestion from 30+ custodians.",
    highlights: [
      "Enabled flexible format support with JSON-based column mapping.",
      "Built flexible architecture to handle diverse file and data formats.",
      "Designed and implemented MongoDB data structure.",
      "Exposed internal events and API.",
    ],
    technologies: [
      "C# .NET Core",
      "MongoDB",
      "Azure Functions (HTTP, Event, Timer triggers)",
    ],
  },
  {
    year: "2019",
    title: "Master Thesis",
    client: "Aarhus University",
    description:
      "My master thesis aimed to identify effective machine learning methods for automating the detection of couplings in TEM data, which is currently done manually, making up 50% of the data processing cost. The transient electromagnetic method (TEM) is a well-established geophysical method for delineation of subsurface resistivity of the earth, commonly used to e.g. find groundwater.",
    highlights: [
      "Achieved 95% detection of coupled soundings with an unsupervised autoencoder.",
      "Contributed to reducing manual analysis in subsurface exploration.",
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "Theano",
      "Random forest",
      "CNN",
      "Autoencoder",
    ],
  },
];

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Portfolio
      </h1>
      <p className="text-lg text-center text-gray-200 mb-8 max-w-2xl mx-auto">
        Welcome to my portfolio, showcasing a selection of my professional
        projects. As a software engineer with over five years of experience, I
        specialize in building robust, cloud-native SaaS applications and
        scalable systems that drive business success. I excel at leading
        cross-functional teams, shaping architectural decisions, and delivering
        innovative solutions with measurable impact. A few of my hobby projects
        are available{" "}
        <a
          href="/projects"
          className="underline text-blue-300 hover:text-blue-400"
        >
          here
        </a>
        .
      </p>
      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100"
          >
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs bg-gray-200 rounded px-2 py-0.5 font-semibold text-gray-700">
                {project.year}
              </span>
              {project.client && (
                <span className="text-s text-gray-500">@ {project.client}</span>
              )}
            </div>
            <h2 className="text-xl font-bold mb-1">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <ul className="list-disc list-inside text-gray-600 mb-2">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
