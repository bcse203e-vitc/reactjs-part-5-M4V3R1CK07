import React, { useState } from "react";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${styles.container} ${
        isDarkMode ? styles.darkMode : styles.lightMode
      }`}
    >
      <div className={styles.card}>
        <h1 className={styles.title}>Theme Switcher</h1>
        <p className={styles.description}>
          Current Theme: {isDarkMode ? "Dark" : "Light"} Mode
        </p>
        <button className={styles.themeButton} onClick={toggleTheme}>
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
