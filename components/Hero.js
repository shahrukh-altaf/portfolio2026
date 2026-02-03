"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import myImg from "../app/assets/img/profilePic.png";
export default function Hero() {
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    "Full-Stack Next.js Developer",
    "React & Tailwind Expert",
    "Prisma + PostgreSQL Dev",
    "Modern Web Builder",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center gradient-bg relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-24 h-24 bg-white opacity-10 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fadeInLeft mt-20 md:mt-40 sm:mt-40">
            <div className="mb-6">
              <span className="text-lg font-medium opacity-90">Hello, I'm</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Shahrukh Altaf
              </h1>
              <div className="text-2xl md:text-3xl font-semibold mb-6">
                <span className="inline-block min-h-[2.5rem]">
                  {texts[currentText]}
                </span>
              </div>
            </div>

            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Full-stack developer skilled in Next.js, React, Prisma, and
              PostgreSQL. I build fast, scalable, and modern web applications
              with clean UI and robust architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-primary text-lg px-8 py-4 hover-lift"
              >
                Get In Touch
              </button>
              <a
                href="https://drive.google.com/file/d/1vsGCFnDLU3lbB40vRpbC_L6nP5LH2aRo/view?usp=drive_link"
                target="_blank"
                download
                className="btn-secondary text-lg px-8 py-4 hover-lift"
              >
                <FaDownload className="inline mr-2" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              <a
                href="https://github.com/Tilwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors p-3 rounded-full border border-white/20 hover:border-white/40"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shahrukh-altaf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors p-3 rounded-full border border-white/20 hover:border-white/40"
              >
                <FaLinkedin size={24} />
              </a>{" "}
              <a
                href="https://x.com/ShahrukhAltaf3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors p-3 rounded-full border border-white/20 hover:border-white/40"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="mailto:shahrukhaltaf123@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors p-3 rounded-full border border-white/20 hover:border-white/40"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image/Animation */}
          <div className="flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-pulse">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  {/* <div className="text-6xl md:text-8xl font-bold text-white">
                    sa
                    
                  </div> */}
                  <Image
                    src={myImg}
                    alt="My Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl ">🚀</span>
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
