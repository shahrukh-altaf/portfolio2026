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
  const [expandedProjects, setExpandedProjects] = useState({});

  const skills = [
    { name: "React.js", level: 90, icon: FaRocket },
    { name: "Next.js", level: 85, icon: FaRocket },
    { name: "TypeScript", level: 65, icon: FaCode },
    { name: "Tailwind CSS", level: 85, icon: FaPalette },
    { name: "Node.js", level: 80, icon: FaDatabase },
    { name: "Express.js", level: 75, icon: FaDatabase },
    { name: "REST APIs", level: 90, icon: FaTools },
    { name: "PostgreSQL", level: 80, icon: FaDatabase },
    { name: "React Query", level: 85, icon: FaTools },
    { name: "Redux Toolkit", level: 80, icon: FaTools },
    { name: "Prisma ORM", level: 80, icon: FaDatabase },
    { name: "React Native", level: 55, icon: FaMobile },
    { name: "Java (Android)", level: 50, icon: FaMobile },
  ];

  const experiences = [
    {
      title: "Full-Stack Software Engineer",
      company: "Timeslink | Dubai, UAE",
      period: "07/2025 - 01/2026",
      description:
        "Led end-to-end development of a production-grade web application, from Figma-based design to deployment",
      achievements: [
        "Built scalable full-stack system using Next.js, React.js, and Tailwind CSS",
        "Developed REST APIs with Prisma ORM and PostgreSQL for efficient data handling",
        "Implemented secure authentication with Google Auth and role-based access",
        "Designed real-time dashboard using React Query for optimized data flow",
        "Deployed and maintained application on VPS, handling server configuration and production setup",
        "Delivered multi-language support (English, Russian) for international users",
      ],
      link: "https://timeslinklogistics.com",
    },

    {
      title: "Frontend Developer",
      company: "Hans Logistics FZE | Dubai, UAE",
      period: "03/2022 - 04/2024",
      description:
        "Developed and maintained multi-vendor web applications within a collaborative development team",
      achievements: [
        "Built scalable React.js interfaces using React Query integrated with REST APIs",
        "Converted Figma designs into responsive UI using Flexbox and Grid layouts",
        "Implemented complete storefront features including product listings and dashboards",
        "Collaborated with backend teams for API integration and data consistency",
        "Contributed to backend development using Node.js and Express.js in later phase",
      ],
      link: "https://fasbazar.com/",
    },
    {
      title: "Junior Java Developer",
      company: "Pearlcom Softwarehouse | Rawalpindi, Pakistan",
      period: "09/2018 - 08/2019",
      description:
        "Developed Android applications using Java with focus on UI/UX design",
      achievements: [
        "Designed mobile interfaces using Adobe Illustrator based on client requirements",
        "Implemented interactive UI components and screen animations",
        "Built educational mobile application integrated with Firebase backend",
        "Collaborated within cross-functional team to deliver client projects",
      ],
      link: null,
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Iqra University | Islamabad, PAK",
      year: "11/2021",
      description: "Graduated with focus on software engineering and development.",
    },
  ];

  const projects = [
    {
      title: "Timeslink Logistics (Tracking Platform)",
      link: "https://timeslinklogistics.com/en",
      description:
        "Built a full-stack logistics tracking platform with a real-time dashboard for monitoring shipments and operations. Built using Next.js, React Query, Prisma ORM, and PostgreSQL, ensuring scalable and efficient data handling. Implemented secure Google Authentication, restricting dashboard access to authorized admin users only. Designed and developed admin dashboard features, including blog management and full CRUD operations. Created responsive landing pages and marketing website, supporting global logistics business operations.",
    },

    {
      title: "VocabUp — Vocabulary Builder",
      link: "https://vocabup.codesbyshahrukh.online/",
      description:
        "Built a responsive vocabulary learning web application designed for non-native English speakers. Implemented flashcard-based learning system with progress tracking and mistake analysis features. Used Redux Toolkit for state management, enabling efficient handling of vocabulary data and user progress. Designed an engaging game-like learning experience, improving user interaction and retention.",
    },
    {
      title: "QuickMart — Instant Order Store",
      link: "https://quick-mart.codesbyshahrukh.online/",
      description:
        "Built a frictionless e-commerce platform allowing users to place orders without account registration. Built using Next.js and React Query, optimizing server-state management and performance. Designed and implemented admin dashboard with Google Authentication, enabling secure product and order management. Created advanced product management system, supporting variations (size, color, attributes) and bulk operations. Focused on user-centric design, simplifying the ordering process for faster customer conversion.",
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
            Full-Stack Software Engineer passionate about building scalable web and mobile applications. Specialized in Next.js, React.js, React Native, Node.js, and PostgreSQL with expertise in developing high-performance user interfaces and RESTful APIs. Dedicated to delivering end-to-end solutions with clean code, innovative architecture, and exceptional user experience.
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
                Full-Stack Software Engineer with 3+ years of experience building scalable web and mobile applications across software
                house and product-based environments. Specialized in Next.js, React.js, React Native, Node.js, and PostgreSQL, with strong
                expertise in developing high-performance user interfaces and RESTful APIs. Proven ability to deliver end-to-end solutions,
                from UI/UX design to backend development and production deployment on VPS environments. Experienced with modern
                tools including React Query, Prisma ORM, and Tailwind CSS for building efficient and maintainable systems. Based in Doha
                with transferable visa and immediate availability.
              </p>
              <div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-4">
                <div className="text-center p-1 sm:p-2 md:p-4 bg-white rounded-lg">
                  <div className="text-base sm:text-lg md:text-2xl font-bold gradient-text">3+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-tight">Years</div>
                </div>
                <div className="text-center p-1 sm:p-2 md:p-4 bg-white rounded-lg">
                  <div className="text-base sm:text-lg md:text-2xl font-bold gradient-text">15</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-tight">Projects</div>
                </div>
                <div className="text-center p-1 sm:p-2 md:p-4 bg-white rounded-lg">
                  <div className="text-base sm:text-lg md:text-2xl font-bold gradient-text">10+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-tight">Tech</div>
                </div>{" "}
                <div className="text-center p-1 sm:p-2 md:p-4 bg-white rounded-lg">
                  <div className="text-base sm:text-lg md:text-2xl font-bold gradient-text">2</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-tight">Companies</div>
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
                          {exp.link ? (
                            <Link
                              href={exp.link}
                              target="_blank"
                              className="hover:text-blue-700 transition-colors "
                            >
                              {exp.company}
                            </Link>
                          ) : (
                            exp.company
                          )}
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

                        <p className="text-gray-700">
                          {expandedProjects[index]
                            ? project.description
                            : project.description.length > 200
                            ? project.description.substring(0, 200) + "..."
                            : project.description}
                          {project.description.length > 200 && !expandedProjects[index] && (
                            <button
                              onClick={() =>
                                setExpandedProjects((prev) => ({
                                  ...prev,
                                  [index]: true,
                                }))
                              }
                              className="text-blue-600 hover:text-blue-800 ml-2 font-medium"
                            >
                              Read more
                            </button>
                          )}
                        </p>
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
