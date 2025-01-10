/* import React from 'react'

const Contact = () => {
  return (
    <div>
  


    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or inquiries!</p>
      <button>Email Me</button>
    </section>



    </div>
  )
}

export default Contact */
import React from 'react';

const Contact = () => (
  <div className="container my-5">
    <h2 className="text-center">Contact Me</h2>
    <form>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea className="form-control" rows="4"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  </div>
);

export default Contact;

