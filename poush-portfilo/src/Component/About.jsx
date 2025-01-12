/* import React from 'react'

const About = () => {
    return (
        <div>
    


            <section id="about" className="about">
                <h2>About Me</h2>
                <p>I'm a passionate web developer who loves to create amazing user experiences. I specialize in front-end development and enjoy learning new technologies!</p>
            </section>



        </div>
    )
}

export default About */
import React from 'react';
import ResetPassword from './ResetPassword';

const About = () => {
  return (
    <div className="container my-5">
      <section id="about" className="about" >
      
      <h2>About Me</h2>
      <p>
        I am an aspiring IT and Cybersecurity professional with a passion for problem-solving and technology.
        My interests include network security, ethical hacking, and IT support.
      </p>
      </section>
      <ResetPassword/>
    </div>
  );
};

export default About;
