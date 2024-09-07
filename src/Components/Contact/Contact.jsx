import React, { useState } from 'react';
import './Contact.css'; 
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => { 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fhrhf2d', 'template_hcivbmp', form.current, {
        publicKey: 'zeDbNS0y1_ClMtsNj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;  
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ from_name: '', from_email: '', message: '' });
    sendEmail(e);
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>If you have any questions or just want to say hello, fill out the form below or reach out via email or phone.</p>
          <ul className="contact-details">
            <li>Email: <a href="mailto:charan@example.com">vajjalasaicharan123@gmail.com</a></li>
            <li>Phone: <a href="tel:+919542379676">+91 95423 79676</a></li>
          </ul>
        </div>
        <form className="contact-form" ref={form} onSubmit={handleSubmit}> 
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"  
              value={formData.from_name}  
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="from_email" 
              value={formData.from_email} 
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message} 
              onChange={handleChange} 
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button" value="Send">Send Message</button>
          {isSubmitted && <p className="submission-message">Thank you for reaching out! I will get back to you soon.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
