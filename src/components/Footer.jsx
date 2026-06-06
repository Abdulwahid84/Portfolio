import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <footer
      className={`${
        isDark ? "bg-black border-blue-900/40" : "bg-white border-blue-100"
      } border-t transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p
            className={`${isDark ? "text-gray-500" : "text-gray-600"} text-sm`}
          >
            © 2026 MD Abdul Wahid Ekram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
