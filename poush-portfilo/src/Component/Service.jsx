
import React from 'react';
/* import projectImage from '../assets/images/project1.jpg'; */ // Replace with your image path
import jt from '../assets/images/jt.jpg'
import Htm from '../assets/images/Htm.jpg'
import css from '../assets/images/css.jpg'
import react from '../assets/images/react.jpg'
const services = [
  {
    title: 'HTML',
    description: 'HTML (HyperText Markup Language) is the standard  language used to create and design the structure of web pages',
    image: Htm,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    title: 'CSS',
    description: 'CSS (Cascading Style Sheets) is a stylesheet language used to control the visual appearance and layout of HTML elements on a web page. While HTML structures the content,.',
    image: css,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    title: 'JAVASCRIPT',
    description: 'JavaScript (JS) is a programming language used primarily to add interactivity, dynamic features, and logic to web pages.',
    image: jt,
    link: 'https://example.com/pen-testing-lab',
  },
  {
    title: 'REACT JS',
    description: 'React is a JavaScript library for building user interfaces (UI). Developed by Facebook, it focuses on creating reusable, interactive, and dynamic components for web applications.',
    image: react,
    link: 'https://reactjs.org/',
  },
];

const Service = () => (
  <div className="container my-5">
    <section id="projects" className="projects">
      <h2 className="text-center">Service</h2>
      <h3>Skills</h3>
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
