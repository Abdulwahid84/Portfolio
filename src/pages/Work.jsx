import React, { useState } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerBg = isDark ? "bg-black" : "bg-white";

  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";

  const cardBg = isDark
    ? "bg-blue-950 hover:bg-blue-900/50"
    : "bg-blue-50 hover:bg-blue-100";

  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";

  const projects = [
  {
    title: "Phish Catcher",
    desc: "A real-time phishing detection Chrome extension that uses Random Forest and XGBoost models to classify malicious URLs with 96% accuracy and enhance browsing security.",
    img: "./phish.jpg",
    live: "https://github.com/Abdulwahid84/phishing-detection-chrome-extension",
    git: "https://github.com/Abdulwahid84/phishing-detection-chrome-extension",
    tech: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "JavaScript",
      "Chrome Extension",
    ],
  },

  {
    title: "AI Customer Support Agent",
    desc: "An LLM-powered customer support chatbot built with Langflow, featuring Retrieval-Augmented Generation (RAG), intelligent query routing, vector search with AstraDB, and context-aware responses.",
    img: "./Agent.jpg",
    live: "https://github.com/AkshatBhat/Langflow-Customer-Support-Agent",
    git: "https://github.com/AkshatBhat/Langflow-Customer-Support-Agent",
    tech: [
      "Python",
      "Langflow",
      "Streamlit",
      "OpenAI",
      "AstraDB",
      "RAG",
      "Multi-Agent AI",
      "Vector Search",
    ],
  },

  {
    title: "Movie Recommendation System",
    desc: "A content-based movie recommendation system that leverages cosine similarity and the TMDB API to deliver personalized movie suggestions in real time.",
    img: "./movie.png",
    live: "https://github.com/Abdulwahid84/movie-recommendation",
    git: "https://github.com/Abdulwahid84/movie-recommendation",
    tech: [
      "Python",
      "Streamlit",
      "TMDB API",
      "Scikit-learn",
      "Recommendation System",
    ],
  },

  {
    title: "Talk Docs",
    desc: "An AI-powered PDF chat application that enables users to ask questions about uploaded documents using LangChain, GROQ API, and Retrieval-Augmented Generation (RAG).",
    img: "./talkdocks.jpg",
    live: "https://github.com/Abdulwahid84/TalkDocs",
    git: "https://github.com/Abdulwahid84/TalkDocs",
    tech: [
      "Python",
      "Streamlit",
      "LangChain",
      "GROQ API",
      "FAISS",
      "RAG",
    ],
  },

  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio website showcasing my AI/ML projects, technical skills, achievements, and software development journey.",
    img: "./portfolio.png",
    live: "https://abdul-wahid-portfolio-five.vercel.app/",
    git: "https://github.com/Abdulwahid84/Portfolio",
    tech: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },
];
  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      {/* Background Effect */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-blue-950/10 via-transparent to-black/30"
            : "bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/20"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>

          <p
            className={`max-w-3xl mx-auto text-lg leading-relaxed ${textPrimary}`}
          >
            A collection of AI/ML, Data Science, and Full Stack projects focused
            on solving real-world problems using intelligent systems and modern
            technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`rounded-2xl border ${borderColor} shadow-xl overflow-hidden transition-all duration-500 transform ${
                hoveredIndex === index
                  ? "scale-105 -translate-y-3 shadow-2xl"
                  : "hover:-translate-y-2"
              } ${cardBg} group relative`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent">
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />

                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredIndex === index
                      ? "bg-black/40 opacity-100"
                      : "bg-black/0 opacity-0"
                  }`}
                ></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[320px]">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${textPrimary}`}>
                    {project.desc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4 mt-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        isDark
                          ? "bg-blue-900/50 text-blue-300 border border-blue-700/50"
                          : "bg-blue-100 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                      isDark
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
                    }`}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live
                  </a>

                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold border-2 transition-all duration-300 ${
                      isDark
                        ? "border-blue-400 text-blue-400 hover:bg-blue-950/50"
                        : "border-blue-600 text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <FaGithub className="text-sm" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <h3
            className={`text-3xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            More Projects Coming Soon 🚀
          </h3>

          <p className={`max-w-2xl mx-auto text-lg ${textPrimary}`}>
            I'm continuously building innovative AI/ML applications, exploring
            intelligent systems, and improving my development skills through
            real-world projects and research.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
