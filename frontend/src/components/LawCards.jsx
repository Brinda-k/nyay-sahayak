import React from 'react';
import { useNavigate } from 'react-router-dom';

const LawCards = () => {
  const navigate = useNavigate();

  
  const laws = [
    { name: 'Criminal Law', route: '/criminal-law' },
    { name: 'Civil Law', route: '/civil-law' },
    { name: 'Constitutional Law', route: '/constitutional-law' },
    { name: 'Administrative Law', route: '/administrative-law' },
    { name: 'Personal Law', route: '/personal-law' },
    { name: 'General FAQs', route: '/general-faqs' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Select a Law Category</h2>
      <div className="row">
        {laws.map((law, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-center" onClick={() => navigate(law.route)} style={{ cursor: 'pointer' }}>
              <div className="card-body">
                <h5 className="card-title">{law.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawCards;
