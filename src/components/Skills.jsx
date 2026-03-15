import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">

      <div className="container">

        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">

          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>SQL</li>
              <li>HTML / CSS</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Automation Tools</h3>
            <ul>
              <li>Selenium WebDriver</li>
              <li>Appium (Android & iOS)</li>
              <li>Playwright</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Automation Framework</h3>
            <ul>
              <li>TestNG</li>
              <li>Page Object Model (POM)</li>
              <li>Reusable Utility Layer</li>
              <li>Dynamic Locator Handling</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>DevOps & Tools</h3>
            <ul>
              <li>Jenkins CI/CD</li>
              <li>Git & GitHub</li>
              <li>BrowserStack (Cross-device testing)</li>
              <li>JIRA</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Testing Concepts</h3>
            <ul>
              <li>SDLC / STLC</li>
              <li>Automation Framework Design</li>
              <li>Cross Platform Mobile Testing</li>
              <li>Defect Lifecycle</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;