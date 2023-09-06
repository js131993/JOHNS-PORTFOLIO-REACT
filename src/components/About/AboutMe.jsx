import React from 'react';
import '../About/AboutMe.css'

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <div className="about-me-content">
          <h2>About Me</h2>
          <p>
            Hello, my name is JOHN SANDERS, and I am a junior developer.  I am currently looking for a job to work on the server side of coding.  I think coding is extremely interesting and fun. It is also something to look forward to each day.  
            I love to build applications to model real world problems and help solve issues along the way.
            I have only been studying for about 6 months. But, I know I can make an impact with my knowledge and background.
          </p>
          <p>
            My journey with coding started with my Full Stack Web Devleopment course from UNC-Chapel Hill.  I worked with people of all backgrounds in creating new web designs
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
