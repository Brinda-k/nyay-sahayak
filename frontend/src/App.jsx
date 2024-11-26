import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';  
import Chatbot from './pages/Chatbot';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FormsPage from './components/FormsPage';
import CardsPage from './pages/CardsPage';
import CriminalLaw from './pages/CriminalLaw';
import LawCards from './components/LawCards';
import FaqPage from './pages/LawFaqPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/services" element={<h1>Our Services</h1>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/chatbot' element={<Chatbot/>}/>
          <Route path='/forms' element={<FormsPage/>}/>
          <Route path="/faqs" element={<CardsPage />} />
          <Route path="/criminalLaw" element={<CriminalLaw />} />
          <Route path="/law" element={<LawCards />} />
        <Route path="/:category" element={<FaqPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
