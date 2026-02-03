"use client";

import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaPalette,
  FaMobile,
} from "react-icons/fa";
import { SiJavascript, SiReact, SiNextdotjs } from "react-icons/si";

import Link from "next/link";
import { projects as allProjects } from "../data/projects";
import Image from "next/image";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Projects", icon: FaCode },
    // { key: "html", label: "HTML", icon: FaMobile },
    // { key: "css", label: "CSS", icon: FaMobile },
    { key: "javascript", label: "JavaScript", icon: SiJavascript },
    { key: "reactjs", label: "React.js", icon: SiReact },
    { key: "nextjs", label: "Next.js", icon: SiNextdotjs },
    // { key: "typescript", label: "TypeScript", icon: FaPalette },
  ];

  const projects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for web development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <filter.icon className="mr-2" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Browse all link */}
        <div className="flex justify-center mb-12">
          {activeFilter !== "all" && (
            <Link
              href={`/projects/${activeFilter}?page=1`}
              className="btn-secondary hover-lift"
            >
              View all {activeFilter} projects →
            </Link>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800} // choose max width
                height={500} // choose proportional height
                className="w-full h-auto object-cover rounded-t-2xl"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
