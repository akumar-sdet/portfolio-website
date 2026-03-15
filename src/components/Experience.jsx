import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">

      <div className="container">

        <h2 className="section-title">Professional Experience</h2>

        <div className="experience-item">

          <h3>Programmer Analyst</h3>
          <h4>Cognizant Technology Solutions</h4>
          <span className="experience-duration">Sept 2023 – Present</span>

          <ul className="experience-points">

            <li>
              Designed and maintained mobile automation frameworks for
              Android and iOS applications using <strong>Appium, Java and TestNG</strong>.
            </li>

            <li>
              Implemented <strong>dynamic locators, WebView handling and reusable utilities</strong>
              to improve automation stability across devices.
            </li>

            <li>
              Integrated automation test suites with <strong>Jenkins CI/CD pipelines</strong>
              enabling continuous regression testing.
            </li>

            <li>
              Executed <strong>cross-device testing using BrowserStack</strong>
              across multiple OS versions and real devices.
            </li>

            <li>
              Automated critical user workflows including
              <strong>deep links, checkout flows and account features</strong>.
            </li>

            <li>
              Collaborated with developers to perform
              <strong>root cause analysis and improve test reliability</strong>.
            </li>

          </ul>

          <div className="experience-tech">
            <span>Appium</span>
            <span>Selenium</span>
            <span>Playwright</span>
            <span>Java</span>
            <span>TestNG</span>
            <span>Jenkins</span>
            <span>BrowserStack</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;