import React from 'react';
import '../About/AboutMe.css'

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <div className="about-me-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm [Your Name], a passionate and creative [Your Profession] based in [Your Location].
            I love building innovative web applications and solving real-world problems through code.
            With [Number of Years] years of experience in the field, I have gained expertise in [Your Skills].
          </p>
          <p>
            My journey in web development started [When and How You Started].
            Since then, I have been on a quest to learn and grow, constantly pushing the boundaries of what's possible.
            I am dedicated to crafting clean, efficient, and beautiful code that brings ideas to life.
          </p>
          <p>
            When I'm not coding, you can find me [Hobbies or Interests].
            I also enjoy [Other Interests] and believe that diverse experiences enrich my perspective as a developer.
            Let's collaborate and turn your ideas into reality.
          </p>
        </div>
        <div className="about-me-image">
          <img src="/path-to-your-image.jpg" alt="Your Name" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
