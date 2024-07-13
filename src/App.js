// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home/Homepage';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import UmpirePage from './pages/UmpirePage/UmpirePage'; 
import AboutUs from './pages/AboutUs/AboutUs';
import Organizer from './pages/Organizer/Organizer';
import Product from "./components/Product/Product"
import WhatsApp from './components/Watsapp/WhatsApp ';
function App() {
  useEffect(() => {
    const app = document.getElementById('app');
    app.style.height = `${window.innerHeight}px`;
  }, []);

  return (
    <Router>
      <div className="App" id="app">
        <Navbar />
        <WhatsApp/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/umpire" element={<UmpirePage />} /> {}
            <Route path="/match-with-us" element={<Organizer />} /> {}
            <Route path="/hire-comentator" element={<Organizer />} /> {}
            <Route path="/hire-score" element={<Organizer />} /> {}
            <Route path="/hire-umpire" element={<Organizer />} /> {}
            <Route path="/about-us" element={<AboutUs />} /> 
            <Route path="/product" element={<Product/>} /> 
            <Route path="/m-product" element={<Product/>} /> 
            <Route path="/accesories" element={<Product />} /> 
            <Route path="*" element={<ErrorPage errorCode="404" errorMessage="Page Not Found" />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;