import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar'; 
import Carousel from '../components/Carousel';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>
      <Carousel />
      
      <section className="text-center py-5">
        <h2 className="mb-4">OUR SERVICES</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <Link to="/chatbot">
              <button className="btn btn-primary btn-lg w-100 py-4" style={{backgroundColor:'black'}}>
              <FontAwesomeIcon icon={faRobot} style={{ color: "#e0dcdc" }} />

                Chatbot
              </button>
            </Link>
          </div>
          <div className="col-md-4 mb-3">
            <Link to="/voice-assistance">
              <button className="btn btn-primary btn-lg w-100 py-4" style={{backgroundColor:'black'}}>
              <FontAwesomeIcon icon={faMicrophone} style={{ color: "#ccbdbf" }} />

                Voice Assistance
              </button>
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
