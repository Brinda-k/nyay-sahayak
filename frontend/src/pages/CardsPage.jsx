import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const CardsPage = () => {
  return (
    <div className="card-container">
      <Card>
        <Card.Img variant="top" src="path_to_image/law.jpg" />
        <Card.Body>
          <Card.Title>Criminal Law</Card.Title>
          <Card.Text>Explore FAQs related to Criminal Law</Card.Text>
          <Link to="/criminalLaw" className="btn btn-primary">View FAQs</Link>
        </Card.Body>
      </Card>
      
      <Card>
        <Card.Img variant="top" src="path_to_image/constitutional_law.jpg" />
        <Card.Body>
          <Card.Title>Constitutional Law</Card.Title>
          <Card.Text>Explore FAQs related to Constitutional Law</Card.Text>
          <Link to="/constitutionalLaw" className="btn btn-primary">View FAQs</Link>
        </Card.Body>
      </Card>

      
    </div>
  );
};

export default CardsPage;
