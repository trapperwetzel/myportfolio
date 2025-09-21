import ProjectCard from "./ProjectCard";
import TypeWriterProjectHeader from "./TypeWriter/TypeWriterProjectsHeader";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "LiftHub Website",
      tech: "C#, ASP.NET MVC, JavaScript/HTML/CSS, MSSQL, Azure",
      description:
        "LiftHub is a collaborative website project with features such as a nutrition calculator and one rep max calculator, supported by an Azure Cloud database backend.",
      github: "https://github.com/trapperwetzel/Lifthub",
      role: "Full-Stack Developer",
      highlights: [
        "Built nutrition and one rep max calculators",
        "Azure Cloud database integration",
        "Implemented M-V-C Design Pattern",
      ],
    },
    {
      title: "Pro-Wrestling API Website",
      tech: "Node.js, React.js + TanStack Query, JavaScript/HTML/CSS",
      description:
        "A React-based web app that fetches professional wrestling data from the Wiki API, parses it into JSON, and displays it with interactive tables, filtering, and search.",
      github: "https://github.com/trapperwetzel/WrestlerAPI",
      role: "Full-Stack Developer",
      highlights: [
        "Fetched and merged wrestling data from Wiki API",
        "Interactive table with filtering by title reigns, days held, alphabetical order, and wrestler search by name or championship",
        "Planned PostgreSQL integration and daily automated updates",
      ],
    },
    {
      title: "Mood Playlist Website",
      tech: "C#, ASP.NET MVC, JavaScript/HTML/CSS, MSSQL, Azure",
      description:
        "Developed for an Advanced OOP class, this website lets users search for songs/artists by mood, powered by an Azure Cloud database backend.",
      github: "https://github.com/trapperwetzel/CIS_414_Playlist_Project",
      role: "Full-Stack Developer",
      highlights: [
        "Developed mood-based search functionality",
        "Azure Cloud database",
        "Implemented M-V-C Design Pattern",
      ],
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center "
    >
      {/* Header */}
      <div className="custom-slideInUp mb-12">
        <TypeWriterProjectHeader />
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* GitHub Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-10 text-green-300 font-mono text-sm text-center flex flex-col items-center space-y-3"
      >
        <p>
          See more projects — including the code for this portfolio on my{" "}
          <a
            href="https://github.com/trapperwetzel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            GitHub
          </a>.
        </p>
        <a
          href="https://github.com/trapperwetzel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-300 hover:text-green-400 transition-colors"
        >
          <FaGithub size={36} />
        </a>
      </motion.div>
    </div>
  );
}
