import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-form">
            <h3>
              Send me a note, and let's get started on your project today!
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  Tell us more about your needs...
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-info">
            <div className="info-item">
              <h3>VISIT US</h3>
              <p>Frederick, MD, USA 21704</p>
            </div>
            <div className="info-item">
              <h3>CALL US NOW</h3>
              <p>Phone: (+123) 456 789</p>
            </div>
            <div className="info-item">
              <h3>INQUIRIES</h3>
              <p>haniworku@net.com</p>
              <p>Mon to Fri (10 am – 8 pm)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
