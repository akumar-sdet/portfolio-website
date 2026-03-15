import React, { useState, useEffect } from "react";
import "./Hero.css";

const roles = [
  "Software Development Engineer in Test",
  "Mobile Automation Engineer (Appium)",
  "Web Automation Engineer (Selenium & Playwright)",
  "CI/CD Automation Engineer"
];

const Hero = () => {

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {

    if (charIndex < roles[roleIndex].length) {

      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 40);

      return () => clearTimeout(timeout);

    } else {

      setTimeout(() => {

        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);

      }, 1800);

    }

  }, [charIndex, roleIndex]);

  return (

    <section id="home" className="hero">

      <img
        src="/profile.png"
        alt="Anoop Kumar"
        className="profile-image"
      />

      <div className="hero-terminal">

        <p className="terminal-line">
          &gt; Hi, I'm <span className="name">Anoop Kumar</span>
        </p>

        <p className="terminal-line">
          &gt; {text}
          <span className="cursor">|</span>
        </p>

        <p className="terminal-line tech">
          &gt; Appium | Selenium | Playwright | TestNG | CI/CD
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="/resume.pdf" className="btn" download>
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;