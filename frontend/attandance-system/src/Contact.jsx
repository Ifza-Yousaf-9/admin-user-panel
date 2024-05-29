import React, { useState } from 'react';
import './Contact.css';


const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="contact-page">
      <h1 style={{padding:"10px 40px",marginTop:"120px"}}>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <center>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
  
        /> <br /> <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        /> <br /> <br />
     <div className="label-textarea">
  <label htmlFor="message">Msg:</label>
  <textarea
    id="message"
    value={message}
    placeholder='Enter Message here'
    onChange={(e) => setMessage(e.target.value)}
    required
  ></textarea>
</div>

        </center>
        <center>
        <button type="submit">Submit</button>
        </center>
      </form>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Company Name</h3>
          <p>Tech Hub Innovation Company</p>
          <div className="google-map">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.76440520792!2d-74.11976387962757!3d40.6976637487071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDI3JzI3LjkiTiA3NMKwMTEnMzUuOCJX!5e0!3m2!1sen!2sus!4v1621505021060!5m2!1sen!2sus"
              width="1000vh"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div style={{
            backgroundColor:'black',
            color:'white',
            width:"100vh",
            padding:"20px 40px",
        }}>
          <h3>Contact Info</h3>
          <p>123 Street, City Name</p>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
   
      </div> </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>    
    </footer>
  
    </div>
  );
};

export default ContactPage;
