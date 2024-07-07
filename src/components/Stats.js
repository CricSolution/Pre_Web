import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faBaseballBall, faTrophy, faSmile } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const Stats = () => {
  const [umpiresCount, setUmpiresCount] = useState(200);
  const [matchesCount, setMatchesCount] = useState(700);
  const [associationsCount, setAssociationsCount] = useState(50);
  const [certifiedCount, setCertifiedCount] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      
      if (umpiresCount < 500) {
        setUmpiresCount(prevCount => prevCount + 5);
      }
    
      if (matchesCount < 1000) {
        setMatchesCount(prevCount => prevCount + 5);
      }
     
      if (associationsCount < 100) {
        setAssociationsCount(prevCount => prevCount + 1);
      }
   
      if (certifiedCount < 50) {
        setCertifiedCount(prevCount => prevCount + 1);
      }
    }, 100); 

    
    return () => clearInterval(interval);

  }, [umpiresCount, matchesCount, associationsCount, certifiedCount]); // Dependency array ensures interval clears correctly

  return (
    <Container>
      <Row className="text-center py-5">
        <Col xs={12} sm={6} md={3}>
          <FontAwesomeIcon icon={faUserCheck} size="3x" />
          <h2>{umpiresCount}</h2>
          <p>Total Umpires</p>
          <hr />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <FontAwesomeIcon icon={faBaseballBall} size="3x" />
          <h2>{matchesCount}</h2>
          <p>Matches Served</p>
          <hr />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <FontAwesomeIcon icon={faSmile} size="3x" />
          <h2>{associationsCount}</h2>
          <p>Associations</p>
          <hr />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <FontAwesomeIcon icon={faTrophy} size="3x" />
          <h2>{certifiedCount}</h2>
          <p>Certified Umpires</p>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Stats;
