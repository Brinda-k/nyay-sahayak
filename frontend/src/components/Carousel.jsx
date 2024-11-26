import React from 'react';
import { useNavigate } from 'react-router-dom';  
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/forms');  
  };

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/law.jpg" className="d-block w-100" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Legal Form Templates</h5>
            <p>Click to access downloadable forms for various legal documents such as Draft a Will, Rental Agreements, and more!</p>
            <button className="btn btn-primary" onClick={handleClick}>Explore Templates</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/law.jpg" className="d-block w-100" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>law cards</h5>
            <p>Click to access downloadable forms for various legal documents such as Draft a Will, Rental Agreements, and more!</p>
            <button className="btn btn-primary" onClick={handleClick}>Explore Templates</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/law.jpg" className="d-block w-100" alt="Third slide" />
        </div>
      </div>

      
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
