import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './EnquiryBlock.css';
import EnquiryModal from './EnquiryModel';


const EnquiryBlock = ({ title, description, buttonLabel, onButtonClick }) => {
  return (
    <Container className="enquiry-block my-4 py-4 px-3">
      <Row > 
        
        <Col md={8} className="text-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </Col>
        <Col md={4} className="button-container d-flex align-items-center justify-content-center">
         
       
          <EnquiryModal/>
        </Col>
      </Row>
    </Container>
  );
};

export default EnquiryBlock;
