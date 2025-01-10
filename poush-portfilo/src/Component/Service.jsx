/* import React from 'react'

const Service = () => {
  return (
    <div>
  
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
      </div>
    </section>
  



    </div>
  )
}

export default Service */
import React from 'react';
/* import projectImage from '../assets/images/project1.jpg'; */ // Replace with your image path
import pa from '../assets/images/pa.jpg'
const services = [
  {
    title: 'Portfolio Website',
    description: 'A React-based portfolio website.',
    image: pa,
    link: '#',
  },
  {
    title: 'computer science Lab',
    description: 'A virtual lab for penetration testing.',
    image: pa,
    link: '#',
  },
];

const Service = () => (
  <div className="container my-5">
    <section id="projects" className="projects">
    <h2 className="text-center">Service</h2>
    <div className="row">
      {services.map((service, index) => (
        <div key={index} className="col-md-6 mb-4">
          <div className="card">
            <img src={service.image} className="card-img-top" alt={service.title} />
            <div className="card-body">
              <h5 className="card-title">{service.title}</h5>
              <p className="card-text">{service.description}</p>
              <a href={service.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  </div>
);

export default Service;
