import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
  // You can replace this with actual portfolio data
  const projects = [
    {
      title: 'Project 1: KKIJ Travels',
      description: 'Description of Project 1.',
      imageUrl: '/project1.jpg',
      link: 'https://github.com/ivyreed/KKIJ-Travels',
    },
    {
      title: 'Project 2: Challenge Fitness',
      description: 'Description of Project 2.',
      imageUrl: '/project2.jpg',
      link: 'https://challenge-fitness-9cf387429034.herokuapp.com/login',
    },
    {
      title: 'Project 3: BUGbytes',
      description: 'Description of Project 3.',
      imageUrl: '/project3.jpg',
      link: 'https://bugbytes-eea33095845f.herokuapp.com/',
    },
  ];

  return (
    <section className="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio-list">
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
