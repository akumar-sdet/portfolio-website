import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">

      <div className="container">

        <h2 className="section-title">Get In Touch</h2>

        <p className="contact-description">
          I'm always open to discussing automation engineering opportunities,
          collaboration on testing frameworks, or interesting projects.
        </p>

        <div className="contact-info">

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:work.anoop.webd1405@gmail.com">
              work.anoop.webd1405@gmail.com
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/anoopkumar-24711a193"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/anoopkumar-24711a193
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/yourgithubusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yourgithubusername
            </a>
          </p>

          <p>
            <strong>Location:</strong> India
          </p>

        </div>

        <div className="contact-buttons">

          <a
            href="mailto:work.anoop.webd1405@gmail.com"
            className="contact-btn"
          >
            Send Email
          </a>

          <a
            href="https://linkedin.com/in/anoopkumar-24711a193"
            className="contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;