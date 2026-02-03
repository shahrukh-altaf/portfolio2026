"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaCode,
  FaPalette,
  FaMobile,
  FaRocket,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    { name: "HTML/CSS", level: 95, icon: FaPalette },
    { name: "JavaScript", level: 75, icon: FaCode },
    { name: "React.js", level: 85, icon: FaRocket },
    { name: "Next.js", level: 80, icon: FaRocket },
    { name: "Tailwind CSS", level: 40, icon: FaPalette },
    { name: "Node.js", level: 70, icon: FaDatabase },
    { name: "TypeScript", level: 40, icon: FaCode },
    { name: "RESTful APIs", level: 95, icon: FaTools },
    { name: "Responsive Design", level: 80, icon: FaMobile },
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Timeslink Logistics - Dubai (Online)",
      period: "Aug 2025 - Present",
      description:
        "Developed and deployed a full-stack logistics platform with real-time tracking, Google login, and admin dashboard.",
      achievements: [
        "Built scalable logistics web app using Next.js, Prisma, PostgreSQL, and Tailwind CSS.",
        "Integrated Google OAuth for secure authentication and access control.",
        "Created dynamic APIs for shipment tracking and project management.",
        "Implemented admin dashboard with CMS, blog, and analytics.",
        "Deployed and optimized app on VPS for high performance.",
      ],
      link: "https://timeslinklogistics.com",
    },

    {
      title: "Frontend Developer",
      company: "Hans Logistics FZE - Dubai (onsite)",
      period: "Mar 2022 - Apr 2024",
      description:
        "Developed and maintained a multivendor e-commerce platform with responsive, user-friendly interfaces.",
      achievements: [
        "Built the front end of an e-commerce store integrated with backend APIs",
        "Implemented responsive UI and product management features for vendors and clients",
        "Created and deployed Figma-based designs across multiple business websites",
      ],
      link: "https://fasbazar.com/",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science (BSCS)",
      institution: "Iqra University Islamabad Campus",
      year: "2017 - 2021",
      description: "Focused on web development and software engineering.",
    },
  ];

  const projects = [
    {
      title: "Timeslink Logistics (Next.js)",
      link: "https://timeslinklogistics.com/",
      description:
        "Full-stack logistics platform with real-time shipment tracking, Google OAuth, and admin dashboard. Built using Next.js, Prisma, PostgreSQL, and Tailwind CSS, deployed on VPS.",
    },

    {
      title: "Vocabup (Next.js)",
      link: "https://vocabup.codesbyshahrukh.online/",
      description:
        "Vocabulary builder app using Next.js, Redux Toolkit, Prisma, and PostgreSQL. Features interactive cards with multiple-choice answers and animations.",
    },
    {
      title: "Quick Mart E-commerce Store (Next.js)",
      link: "https://quick-mart.codesbyshahrukh.online/",
      description:
        "Instant order-based e-commerce platform built with Next.js, React Query, Prisma, and PostgreSQL. Users order via form without signup, with full admin control for products and categories.",
    },
    {
      title: "Multivendor E-commerce Platform (Hans Logistics FZE)",
      link: "http://fasbazar.ae/",
      description:
        "Developed a complete multivendor e-commerce system with UI design, product management, and admin controls.",
    },

    {
      title: "Hotel Management System (Next.js)",
      link: "http://codesbyshahrukh.online/",
      description:
        "Created a full-stack hotel booking system with authentication, room management, and optimized performance.",
    },
    {
      title: "OMDB Movie Search Engine (React.js)",
      link: "http://codesbyshahrukh.online/",
      description:
        "Developed a real-time movie search app integrating the OMDB API with responsive UI and error handling.",
    },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Web Developer passionate about building modern, scalable, and
            user-friendly web applications with clean code and innovative
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Personal Info */}
          <div className="animate-fadeInLeft">
            <div className="bg-gray-50 rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Who I Am
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm Shahrukh Altaf, a dedicated Web Developer with strong
                expertise in React.js, Next.js, and full-stack development. I
                specialize in creating responsive, scalable, and
                performance-driven applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold gradient-text">2+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold gradient-text">13</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold gradient-text">8+</div>
                  <div className="text-gray-600">Technologies</div>
                </div>{" "}
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold gradient-text">2</div>
                  <div className="text-gray-600">Freelance Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Skills, Experience, Education, Projects */}
          <div className="animate-fadeInRight">
            <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
              {["skills", "experience", "education", "projects"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 rounded-md transition-all ${
                    activeTab === tab
                      ? "bg-white shadow-sm gradient-text font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover-lift">
              {activeTab === "skills" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 gradient-text">
                    Technical Skills
                  </h3>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="animate-fadeInUp"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <skill.icon className="text-blue-600 mr-3" />
                            <span className="font-semibold text-gray-800">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 gradient-text">
                    Work Experience
                  </h3>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-blue-500 pl-6 animate-fadeInUp"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <h4 className="text-xl font-semibold text-gray-800">
                          {exp.title}
                        </h4>
                        <p className="text-blue-600 font-medium">
                          <Link
                            href={exp.link}
                            target="_blank"
                            className="hover:text-blue-700 transition-colors "
                          >
                            {exp.company}
                          </Link>
                        </p>
                        <p className="text-gray-500 text-sm mb-2">
                          {exp.period}
                        </p>
                        <p className="text-gray-700 mb-3">{exp.description}</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "education" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 gradient-text">
                    Education
                  </h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-green-500 pl-6 animate-fadeInUp"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <h4 className="text-xl font-semibold text-gray-800">
                          {edu.degree}
                        </h4>
                        <p className="text-green-600 font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
                        <p className="text-gray-700">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "projects" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 gradient-text">
                    Projects
                  </h3>
                  <div className="space-y-6">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-purple-500 pl-6 animate-fadeInUp"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-semibold text-gray-800 hover:text-blue-600  transition-colors duration-300 cursor-pointer"
                        >
                          {project.title + `🔗`}
                        </a>

                        <p className="text-gray-700">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
