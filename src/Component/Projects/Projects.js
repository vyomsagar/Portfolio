// src/pages/Projects.js or wherever you store this
import { projectData } from "./projectsData.js";

export const Projects = () => {
  return (
    <div className="w-full min-h-screen text-white bg-black px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 underline">
        My Projects
      </h1>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 border border-purple-500 rounded-xl p-5 shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-2xl font-semibold text-purple-400 mb-2">
              {project.title}
            </h2>
            <p className="mb-4 text-sm text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-white mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-purple-700 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-400 hover:underline"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
