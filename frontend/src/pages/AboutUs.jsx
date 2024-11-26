import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="container my-5">
      
      <div className="row align-items-center mb-5">
        <div className="col-md-8 text-section">
          <h2 className="section-title">The Challenge</h2>
          <p className="section-text">
            Access to legal information and awareness is a significant challenge for a large population in India, particularly for those who are illiterate or belong to marginalized communities. The complexity of the legal system and lack of awareness about legal rights and remedies hinder access to justice.
          </p>
          <p className="section-text">
            Our mission is to bridge this gap by developing a user-friendly platform that delivers legal information and guidance in an easily accessible and understandable way. 
          </p>
        </div>
        <div className="col-md-4 image-section">
          <img src="/images/image.png" alt="Challenge" className="img-fluid rounded shadow-lg"/>
        </div>
      </div><hr></hr>

      <div className="row align-items-center flex-md-row-reverse mb-5">
        <div className="col-md-8 text-section">
          <h2 className="section-title">The Solution</h2>
          <p className="section-text">
            We are developing a digital assistant that can converse in multiple languages and provide concise, easy-to-understand legal information. The assistant will address common legal queries such as:
          </p>
          <ul>
            <li>What are my rights as a citizen?</li>
            <li>How can I file a complaint?</li>
            <li>How can I access legal aid services?</li>
            <li>How can I obtain legal documents?</li>
            <li>What are the legal implications of a particular action?</li>
          </ul>
          <p className="section-text">
            Additionally, it will provide guidance on various legal topics like family law, property law, labor law, and criminal law, making legal knowledge more accessible to all.
          </p>
        </div>
        <div className="col-md-4 image-section">
          <img src="/images/law2.webp" alt="Solution" className="img-fluid rounded shadow-lg"/>
        </div>
      </div><hr></hr>

      <div className="row align-items-center mb-5">
        <div className="col-md-8 text-section">
          <h2 className="section-title">The Impact</h2>
          <p className="section-text">
            By providing citizens with the knowledge of their rights, we aim to empower marginalized communities, improve access to justice, and foster a culture of legal awareness. Our platform will include features like interactive chatbots, decision trees, and virtual assistants to guide users through complex legal topics in a way that is simple, clear, and easily understandable.
          </p>
          <p className="section-text">
            The digital assistant will be available across multiple devices, ensuring accessibility through smartphones, tablets, and desktops, and will support a variety of regional languages to reach a broader audience.
          </p>
        </div>
        <div className="col-md-4 image-section">
          <img src="/images/law3.jpg" alt="Impact" className="img-fluid rounded shadow-lg"/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
