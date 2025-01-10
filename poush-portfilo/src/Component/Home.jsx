
import React from 'react';
import Project from './Project';



const Home = () => (
  <div>
    <div className="container text-center my-5">
      <div col-md-4>

        
          
            <Project />

          

        <header>
        <h1 className="display-4">Hi, I'm shikhar</h1>
        <p className="lead">Aspiring IT and Web developer Professional</p>
        <a href="/about" className="btn btn-primary mt-3"   >Learn More</a>

        </header>
      </div>
      <div>
      <main>
        <h2>Main Content</h2>
       
        <p>
          This is the main content area of the website where information is displayed.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sed totam libero
          eum nam labore consectetur dignissimos excepturi hic eligendi obcaecati reprehenderit optio,
          aspernatur dolorem, tempore at enim? Suscipit, iste.This is the main content area of the website where information is displayed.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sed totam libero
          eum nam labore consectetur dignissimos excepturi hic eligendi obcaecati reprehenderit optio,
          This is the main content area of the website where information is displayed.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sed totam libero
          eum nam labore consectetur dignissimos excepturi hic eligendi obcaecati reprehenderit optio,
        </p>
      </main>
      </div>


    </div>
    <footer className='footer'>
      <p>&copy; 2025 MyCompany. All Rights Reserved.</p>
      <p>
        <a href="#privacy-policy">Privacy Policy</a> |
        <a href="#terms-of-service">Terms of Service</a> |
        <a href="#contact">Contact Us</a>
      </p>
    </footer>
  </div>

);

export default Home;

