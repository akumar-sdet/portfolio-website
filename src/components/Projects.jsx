import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">

      <div className="container">

        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          {/* Project 1 */}

          <div className="project-item">

            <h3>Playwright Automation Framework</h3>

            <p>
              End-to-end web automation framework built using Playwright for
              an e-commerce platform to validate critical user workflows.
            </p>

            <ul className="project-features">
              <li>Automated login, product search, cart and checkout flows</li>
              <li>Implemented reusable utilities and test fixtures</li>
              <li>Parallel test execution for faster regression</li>
              <li>Improved reliability with stable selectors</li>
            </ul>

            <div className="project-tech">
              <span>Playwright</span>
              <span>JavaScript</span>
              <span>Automation Testing</span>
            </div>

            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>

          </div>


          {/* Project 2 */}

          <div className="project-item">

            <h3>OCR Text Extraction System</h3>

            <p>
              OCR based web application that extracts text from images and
              exports the data to Excel using Tesseract Engine.
            </p>

            <ul className="project-features">
              <li>Image text extraction using Tesseract OCR</li>
              <li>Backend implemented using Django framework</li>
              <li>Automated export of extracted data to Excel</li>
            </ul>

            <div className="project-tech">
              <span>Django</span>
              <span>Tesseract</span>
              <span>Python</span>
              <span>HTML/CSS</span>
            </div>

            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;