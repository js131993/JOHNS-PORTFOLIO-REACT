import React from 'react';
import '../Resume/Resume.css'

const Resume = () => {
  return (
    <section className="resume">
      <div className="container">
        <h2>Resume</h2>

        {/* Education Section */}
        <div className="resume-section">
          <h3>Education</h3>
          <p>
            <strong>UNIVERSITY OF NORTH CAROLINA at GREENSBORO</strong> - 
            <br />
            Graduation Year: 20XX
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="resume-section">
          <h3>Work Experience</h3>
          <p>
            <strong>Company Name</strong> - Software Engineer
            <br />
            Duration: Month 20XX - Month 20XX
            <br />
            Description of your responsibilities and achievements.
          </p>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML/CSS</li>
            <li>Node.js</li>
            {/* Add more skills */}
          </ul>
        </div>

        {/* Additional Sections */}
        {/* Add additional sections like Projects, Certifications, etc. */}

      </div>
    </section>
  );
};

export default Resume;
