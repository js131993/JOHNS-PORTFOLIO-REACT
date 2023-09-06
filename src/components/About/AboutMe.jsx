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
            As a former teacher, I bring many new ideas to the table when it comes to coding and project work. At my last job, I had to to think outside the box when helping students and working with faculty.
            
            My journey with coding started with my Full Stack Web Devleopment course from UNC-Chapel Hill.  I worked with people of all backgrounds in creating new web designs
            
            I am dedicated to crafting clean, efficient, and beautiful code that brings ideas to life.
          </p>
          <p>
            When I am not coding, I will be traveling to different places, close by and abroad.  I grew up in North Carolina and would never object to going to a good basketball game.
            Let's collaborate and turn your ideas into reality. I am here to help and find a solution to your problems
          </p>
        </div>
        <div className="about-me-image">
          <img src="/path-to-your-image.jpg" alt="JOHN SANDERS" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
