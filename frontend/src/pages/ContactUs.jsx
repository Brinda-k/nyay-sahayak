import React, { useState } from 'react';
import axios from 'axios'; 
import './ContactUs.css';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !feedback) {
      setStatusMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/send-feedback', {
        email,
        feedback
      });

      if (response.status === 200) {
        setStatusMessage('Thank you for your feedback!');
        setEmail('');
        setFeedback('');
      }
    } catch (error) {
      setStatusMessage('There was an error sending your feedback.');
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default ContactUs;
