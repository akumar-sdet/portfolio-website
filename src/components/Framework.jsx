import React, { useEffect } from "react";
import "./Framework.css";

const layers = [
  {
    title: "Test Layer",
    desc: "TestNG test cases executing automation scenarios",
    mapping: "Test execution → Test Layer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 13l4 4L19 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: "Page Object Model",
    desc: "Reusable page classes managing UI interactions",
    mapping: "Test layer → Page Object Model",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 6h16v12H4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 12h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    title: "Utility Layer",
    desc: "Reusable methods like waits, scrolling, retries",
    mapping: "Platform helpers → Utility Layer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2v20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 6l12 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    title: "Driver Manager",
    desc: "Handles driver initialization and configuration",
    mapping: "Driver setup → Driver Manager",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 20h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 20V10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 6v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    title: "Automation Tools",
    desc: "Appium, Selenium, Playwright executing tests",
    mapping: "Test tooling → Automation Tools",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 12h14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 5v14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    title: "Execution Layer",
    desc: "BrowserStack cloud execution & CI/CD pipelines",
    mapping: "CI/CD integration → Execution Layer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 12l4-4 4 4-4 4-4-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M13 12l4-4 4 4-4 4-4-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
];

const Framework = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".framework-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="framework" className="framework">
      <div className="container">
        <h2 className="section-title">Automation Framework</h2>
        <p className="framework-intro">
          A layered architecture that keeps automation reliable, scalable, and easy to maintain.
        </p>
        <div className="framework-grid">
          {layers.map((layer, index) => (
            <div key={index} className="framework-card">
              <span className="framework-icon" aria-hidden="true">
                {layer.icon}
              </span>
              <h3>{layer.title}</h3>
              <p>{layer.desc}</p>
              {layer.mapping && <p className="framework-mapping">{layer.mapping}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Framework;
