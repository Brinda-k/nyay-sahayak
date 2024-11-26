import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CriminalLaw = () => {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    
    axios
      .get('http://localhost:3000/api/faqs/criminalLaw') 
      .then((response) => {
        setFaqs(response.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch FAQs');
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Criminal Law FAQs</h2>
      {error && <p className="text-danger">{error}</p>}
      <Accordion defaultActiveKey="0">
        {faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))
        ) : (
          <p>Loading FAQs...</p>
        )}
      </Accordion>
    </div>
  );
};

export default CriminalLaw;
