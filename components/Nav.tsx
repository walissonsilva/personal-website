"use client";

import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Toggle } from "./ui/toggle";
import { motion } from "framer-motion";

export const Nav = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function applyTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function toggleTheme() {
    const isDark = !isDarkTheme;
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);

    applyTheme(isDark);
    localStorage.setItem("darkTheme", String(isDark));
  }

  useEffect(() => {
    const isDarkThemeStorage = localStorage.getItem("darkTheme");

    if (isDarkThemeStorage != null) {
      const isDark = JSON.parse(isDarkThemeStorage);
      setIsDarkTheme(isDark);
      applyTheme(isDark);
    }
  }, []);

  return (
    <nav className="background border-b-primary-200 border-[1px] border-solid h-20 flex items-center justify-center">
      <motion.ul
        className="flex justify-center items-center gap-4 relative flex-1 leading-9"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <li>About me</li>
        <li>Portfolio</li>
        <li>Courses</li>
        <li>Videos</li>
        <li>Blog</li>

        <div className="absolute top-0 right-4">
          <Toggle
            className="border-[1px] border-solid border-gray-200 dark:border-gray-700 rounded-md"
            onClick={toggleTheme}
          >
            {isDarkTheme ? <FiSun /> : <FiMoon />}
          </Toggle>
        </div>
      </motion.ul>
    </nav>
  );
};
