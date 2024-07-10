import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EnquiryForm from '../../components/EnquiryForm';
import './UmpirePage.css';
import { Card, Button, Accordion } from 'react-bootstrap';
import Testimonials from '../../components/Testimonial/Testimonials';

const UmpirePage = () => {
  const [navbarHeight, setNavbarHeight] = useState(localStorage.getItem('navbarHeight') || 0);

  useEffect(() => {
    function updateSize() {
      setNavbarHeight(localStorage.getItem('navbarHeight'));
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="umpire-page container">
      <Navbar />

      <div className="umpire-content mt-5" style={{ marginTop: `${navbarHeight}px` }}>
        <div className="jumbotron">
          <h1 className="display-4">Welcome, Umpire!</h1>
          <Card className="mb-4 card-umpire">
            <Card.Body>
              <Card.Title className="card-title">Ready to take your passion for cricket to the next level?</Card.Title>
              <Card.Text className="card-text">Join CricSolution's esteemed team of umpires and become an integral part of the game's integrity and fairness.</Card.Text>
              <Card.Text className="card-text">Register now to embark on a journey of professional growth, skill refinement, and unparalleled opportunities in the world of cricket officiating.</Card.Text>
              <Card.Text className="card-text">Whether you're a seasoned umpire or just starting your officiating career, CricSolution welcomes you to register and join our community of dedicated and respected officials.</Card.Text>
              <button className='org-button'  href="#"> <EnquiryForm /></button>
            </Card.Body>
          </Card>
        </div>

        <div className="why-umpire mt-5">
          <h2 className="mb-4">Why Become an Umpire?</h2>
          <Card>
            <Card.Body>
              <ul style={{listStyleType:"none", justifyContent:"justify"}}>
                <li className='umpire-list'>Enhance your understanding of cricket and its rules.</li>
                <li className='umpire-list'>Gain respect and recognition within the cricket community.</li>
                <li className='umpire-list'>Earn additional income through officiating matches.</li>
                <li className='umpire-list'>Enjoy the best view in the house at cricket matches.</li>
                <li className='umpire-list'>Develop leadership and decision-making skills.</li>
              </ul>
            </Card.Body>
          </Card>
        </div>

        <div className="testimonials-umpire mt-8">
          <Testimonials/>
        </div>

        {/* <div className="resources mt-5">
          <h2 className="mb-4">Umpire Resources</h2>
          <Card>
            <Card.Body>
              <ul>
                <li><a href="https://www.icc-cricket.com/about/cricket/rules-and-regulations" target="_blank" rel="noopener noreferrer">ICC Rules and Regulations</a></li>
                <li><a href="https://www.lords.org/mcc/the-laws-of-cricket" target="_blank" rel="noopener noreferrer">Laws of Cricket</a></li>
                <li><a href="https://www.cricinfo.com" target="_blank" rel="noopener noreferrer">ESPN Cricinfo</a></li>
              </ul>
            </Card.Body>
          </Card>
        </div> */}

        <div className="faq mt-5">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do I become an umpire?</Accordion.Header>
              <Accordion.Body>
                "To become an umpire, register on our platform and attend our training sessions. You will be guided through the certification process."
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What are the qualifications needed?</Accordion.Header>
              <Accordion.Body>
                "No specific qualifications are needed, but a keen understanding of cricket and its rules is beneficial. Training will be provided."
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

      </div>
   
    </div>
  );
};

export default UmpirePage;
