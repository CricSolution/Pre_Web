import React, { useEffect, useState } from 'react';
import EnquiryForm from '../../components/EnquiryForm';
import { Card, Button, Accordion, ListGroup } from 'react-bootstrap';
import './Organizer.css';
import Testimonials from "../../components/Testimonial/Testimonials";
import { useLocation } from 'react-router-dom';

const Organizer = () => {
  const [navbarHeight, setNavbarHeight] = useState(localStorage.getItem('navbarHeight') || 0);
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname);

  useEffect(() => {
    function updateSize() {
      setNavbarHeight(localStorage.getItem('navbarHeight'));
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    setUrl(location.pathname);
    console.log(url)
  }, [location.pathname]);

  const getContentForPath = (url) => {
    switch (url) {
      case "/umpire":
      case "/hire-umpire":
        return {
          heading:"Get Professional Umpires!",
          title: "Elevate Your Tournament with Professional Umpiring",
          text1: "Partner with CricSolution for professional umpiring services to ensure every match in your tournament is officiated with the highest standards of fairness and accuracy.",
          text2: "Our experienced umpires bring expertise and integrity, enhancing the credibility of your tournament.",
          text3: "Register now to secure top-notch umpiring services for your event.",
          faq1: "How do I register my tournament for umpiring services?",
          faq1Answer: "Fill out the enquiry form or contact us directly to register your tournament and arrange umpiring services.",
          faq2: "What are the benefits of using CricSolution umpires?",
          faq2Answer: "Our umpires are highly trained and experienced, ensuring fair play and adherence to cricket regulations."
        };
      case "/hire-score":
        return {
          heading:"Get Professional Scorers!",
          title: "Enhance Your Tournament with Professional Scoring",
          text1: "CricSolution offers expert scoring services to keep accurate and detailed records of your matches.",
          text2: "Our scorers use the latest technology and techniques to provide precise and reliable scoring.",
          text3: "Get in touch to enhance the efficiency and accuracy of your tournament's scoring.",
          faq1: "How do I hire scorers for my tournament?",
          faq1Answer: "Use the enquiry form or contact us directly to arrange professional scoring services for your tournament.",
          faq2: "What technologies do your scorers use?",
          faq2Answer: "Our scorers are equipped with the latest scoring software and devices to ensure accuracy and efficiency."
        };
      case "/hire-comentator":
        return {
          heading:"Get Professional Commentator!",
          title: "Bring Your Matches to Life with Expert Commentary",
          text1: "Engage your audience with professional commentators from CricSolution who provide insightful and entertaining commentary.",
          text2: "Our commentators enhance the viewing experience, adding value to every match in your tournament.",
          text3: "Contact us to hire commentators who can bring your matches to life.",
          faq1: "How do I hire commentators for my tournament?",
          faq1Answer: "Complete the enquiry form or reach out to us directly to book commentators for your matches.",
          faq2: "What makes CricSolution commentators stand out?",
          faq2Answer: "Our commentators are experienced, knowledgeable, and capable of providing engaging and insightful commentary."
        };
      default:
        return {
          heading:"Let's Organize the tournament Together!",
          title: "Elevate Your Tournament Experience with CricSolution",
          text1: "Partner with CricSolution to streamline the organization and management of your cricket tournaments.",
          text2: "Our resources and expertise help you ensure every aspect of your tournament runs smoothly and professionally.",
          text3: "Join us to enhance the credibility, efficiency, and overall success of your tournaments, no matter the scale or scope.",
          faq1: "How do I get started with CricSolution?",
          faq1Answer: "Fill out the enquiry form or contact our team directly. We'll guide you through the process and provide the necessary resources and support.",
          faq2: "What can CricSolution do for my tournament?",
          faq2Answer: "We offer services including umpire assignment, resource management, and rule enforcement to help you organize and manage your tournament efficiently."
        };
    }
  };

  const content = getContentForPath(url);

  return (
    <div className="organizer-page container">
      {navbarHeight && (
        <div style={{ minHeight: `calc(100vh - ${navbarHeight}px)`, marginTop: `${navbarHeight}px` }}>
          <div className="jumbotron">
            <h1 className="display-4">{content.heading}</h1>
            <Card className="mb-4 card-organizer">
              <Card.Body>
                <Card.Title className="card-title">{content.title}</Card.Title>
                <Card.Text className="card-text">{content.text1}</Card.Text>
                <Card.Text className="card-text">{content.text2}</Card.Text>
                <Card.Text className="card-text">{content.text3}</Card.Text>
                <Button href="#"><EnquiryForm /></Button>
              </Card.Body>
            </Card>
          </div>

          <div className="why-organizer mt-5">
            <h2 className="mb-4">Why Choose CricSolution for Your Tournaments?</h2>
            <Card>
              <Card.Body>
                <ListGroup variant="flush" className="list-styled">
                  <ListGroup.Item>Streamline tournament planning and execution.</ListGroup.Item>
                  <ListGroup.Item>Access to professional umpire scheduling and management.</ListGroup.Item>
                  <ListGroup.Item>Ensure adherence to cricket rules and regulations.</ListGroup.Item>
                  <ListGroup.Item>Enhance the professional image of your tournaments.</ListGroup.Item>
                  <ListGroup.Item>Receive tailored support and resources for successful events.</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>

          <div className="testimonials mt-5">
            <Testimonials />
          </div>

          <div className="resources mt-5">
            <h2 className="mb-4">Organizer Resources</h2>
            <Card>
              <Card.Body>
                <ListGroup variant="flush" className="list-styled">
                  <ListGroup.Item><a href="https://www.icc-cricket.com/about/cricket/rules-and-regulations" target="_blank" rel="noopener noreferrer">ICC Rules and Regulations</a></ListGroup.Item>
                  <ListGroup.Item><a href="https://www.lords.org/mcc/the-laws-of-cricket" target="_blank" rel="noopener noreferrer">Laws of Cricket</a></ListGroup.Item>
                  <ListGroup.Item><a href="https://www.cricinfo.com" target="_blank" rel="noopener noreferrer">ESPN Cricinfo</a></ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>

          <div className="faq mt-5">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>{content.faq1}</Accordion.Header>
                <Accordion.Body>{content.faq1Answer}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>{content.faq2}</Accordion.Header>
                <Accordion.Body>{content.faq2Answer}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

        </div>
      )}
    </div>
  );
};

export default Organizer;
