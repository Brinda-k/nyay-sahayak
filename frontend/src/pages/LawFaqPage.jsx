import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FaqAccordion from '../components/FaqAccordian'; 
import { useParams } from 'react-router-dom';

const LawFaqPage = () => {
  const { category } = useParams(); 
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    axios.get(`http://localhost:3000/api/faqs/${category}`)
      .then(response => setFaqs(response.data))
      .catch(error => {
        console.error('Error fetching FAQs:', error);
        setError('Failed to load FAQs. Please try again later.');
      });
  }, [category]);

  
  const formatCategoryName = (name) => {
    return name.replace('-', ' ').replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{formatCategoryName(category)} FAQs</h2>
      {error && <p className="text-danger text-center">{error}</p>}
      {faqs.length > 0 ? (
        <FaqAccordion faqs={faqs} />
      ) : (
        <p className="text-center">Loading FAQs...</p>
      )}
    </div>
  );
};

export default LawFaqPage;
