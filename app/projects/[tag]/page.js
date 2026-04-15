"use client";

import Link from "next/link";
import { projects as allProjects } from "../../../data/projects";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Hero from "../../../components/Hero";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const PAGE_SIZE = 6;

export default function TagProjectsPage({ params, searchParams }) {
  const [expandedProjects, setExpandedProjects] = useState({});
  const tag = params.tag;
  const page = Number(searchParams?.page || 1);

  const projects = allProjects.filter((p) => p.category === tag);
  const total = projects.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pageItems = projects.slice(start, end);

  return (
    <>
      <Navbar />
      <Hero />
      <section className="section bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text capitalize">
              {tag} Projects
            </h1>
            <p className="text-gray-600 mt-2">
              Showing {pageItems.length} of {total} project(s)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageItems.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow hover-lift"
              >
                <div className="relative h-44 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <span className="text-6xl text-white opacity-80">
                    {project.title.split(" ")[0]}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {expandedProjects[project.id]
                      ? project.description
                      : project.description.length > 150
                      ? project.description.substring(0, 150) + "..."
                      : project.description}
                    {project.description.length > 150 && (
                      <button
                        onClick={() =>
                          setExpandedProjects((prev) => ({
                            ...prev,
                            [project.id]: !prev[project.id],
                          }))
                        }
                        className="text-blue-600 hover:text-blue-800 ml-2 font-medium"
                      >
                        {expandedProjects[project.id] ? "See less" : "See more"}
                      </button>
                    )}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4  mt-4">
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              <Link
                href={`/projects/${tag}?page=${Math.max(1, page - 1)}`}
                className={`btn-secondary ${
                  page === 1 ? "pointer-events-none opacity-50" : ""
                }`}
              >
                Previous
              </Link>
              <span className="px-4 py-2 text-gray-700">
                Page {page} of {totalPages}
              </span>
              <Link
                href={`/projects/${tag}?page=${Math.min(totalPages, page + 1)}`}
                className={`btn-secondary ${
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }`}
              >
                Next
              </Link>
            </div>
          )}

          <div className="flex justify-center mt-6">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
