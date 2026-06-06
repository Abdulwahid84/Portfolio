import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaBrain,
  FaGraduationCap,
  FaLaptopCode,
  FaArrowRight,
  FaDatabase,
} from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const cardBg = isDark ? "bg-blue-950/40" : "bg-blue-50";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";
  const headingColor = isDark ? "text-white" : "text-gray-900";

  const journey = [
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Academic Foundation",
      description:
        "Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning with strong fundamentals in Data Structures, Algorithms, and software engineering.",
    },
    {
      icon: <FaBrain className="text-2xl" />,
      title: "AI & Machine Learning",
      description:
        "Built intelligent systems including phishing detection, healthcare prediction, and recommendation engines using Python, Scikit-learn, TensorFlow, and machine learning pipelines.",
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      title: "Development Experience",
      description:
        "Hands-on experience in backend development, REST APIs, full-stack applications, and deploying scalable AI-powered solutions for real-world use cases.",
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: "Research & Innovation",
      description:
        "Published research work on Chronic Kidney Disease Prediction using Machine Learning and continuously exploring innovative AI technologies and cloud-based systems.",
    },
  ];

  const skills = [
    {
      category: "Programming",
      items: ["Python", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "OpenCV",
      ],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "Kubernetes", "Azure", "Streamlit"],
    },
  ];

  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-blue-950/10 via-transparent to-black/30"
            : "bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/20"
        }`}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${headingColor} pt-4`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>

          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${textPrimary}`}>
            Passionate AI/ML developer and continuous learner driven by
            innovation, problem-solving, and building impactful real-world
            applications.
          </p>
        </div>

        {/* Introduction */}
        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-16 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
            Welcome to My Journey
          </h2>

          <p className={`text-lg leading-relaxed ${textPrimary} mb-4`}>
            I'm{" "}
            <span className="font-semibold text-blue-500">
              MD Abdul Wahid Ekram
            </span>
            , a Computer Science undergraduate specializing in Artificial
            Intelligence and Machine Learning with a passion for building
            intelligent and scalable real-world applications. My technical
            journey began during the early years of engineering with a strong
            foundation in Data Structures and Algorithms, which helped shape my
            analytical thinking and problem-solving abilities.
          </p>

          <p className={`text-lg leading-relaxed ${textPrimary}`}>
            Over time, I transitioned from core programming concepts to
            developing practical AI-driven solutions, gaining hands-on
            experience in machine learning, backend development, and data-driven
            systems. Today, I combine academic excellence with real-world
            project experience, continuously exploring innovative technologies
            to build impactful and user-focused applications.
          </p>
        </div>

        {/* Journey */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${headingColor}`}
          >
            My Development{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journey.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border ${borderColor} ${cardBg} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm`}
              >
                <div className="text-blue-500 mb-4">{item.icon}</div>

                <h3 className={`text-xl font-bold mb-3 ${headingColor}`}>
                  {item.title}
                </h3>

                <p className={`${textPrimary} leading-relaxed`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${headingColor}`}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`rounded-xl border ${borderColor} ${cardBg} p-6 backdrop-blur-sm`}
              >
                <h3 className={`text-xl font-bold mb-4 ${headingColor}`}>
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isDark
                          ? "bg-blue-900/60 text-blue-300 border border-blue-700/50 hover:bg-blue-900"
                          : "bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-12 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-8 ${headingColor}`}>
            Highlights &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                96%
              </div>

              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  ML Model Accuracy
                </h3>

                <p className={textPrimary}>
                  Achieved high-performance results in phishing detection and
                  healthcare prediction systems.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                📄
              </div>

              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Research Publication
                </h3>

                <p className={textPrimary}>
                  Published research paper on Chronic Kidney Disease Prediction
                  using Machine Learning techniques.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                🏆
              </div>

              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Hackathon Achievement
                </h3>

                <p className={textPrimary}>
                  Secured Top 3 position among 150+ teams in Code Face Off Tech
                  Fest 2024.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                🚀
              </div>

              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Real-World Projects
                </h3>

                <p className={textPrimary}>
                  Developed AI-powered applications including phishing
                  detection, recommendation systems, and prediction models.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className={`text-lg mb-8 ${textPrimary}`}>
            Interested in collaborating or exploring my work?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/work"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
              }`}
            >
              View My Projects <FaArrowRight className="text-sm" />
            </a>

            <a
              href="/contact"
              className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                isDark
                  ? "border-blue-400 text-blue-400 hover:bg-blue-950/50"
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              Contact Me <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;