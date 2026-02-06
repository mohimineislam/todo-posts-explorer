import React, { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <footer className="footer">
      <div className="footer-glass">

        <div className="footer-top">
          <h2 className="footer-logo">Explorer</h2>

          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <p className="footer-text">
          © {currentYear} All rights reserved to <strong>Mohimine Islam</strong>
        </p>

        <div className="footer-links">
          <a href="https://github.com/mohimineislam" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
