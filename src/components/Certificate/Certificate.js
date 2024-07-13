// src/components/Certificate.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./certificate.css";

const Certificate = () => {
  return (
    <Container className="certificate-container my-5">
      <h1 className="text-center">Certificate Sample</h1>
      <div className="outer-border">
        <div className="inner-border">
          <Row className="certificate-border p-4">
            <Col xs={12} className="text-center mb-4">
              <h2 className="certificate-title">Buffalo Public Schools Certificate of Completion</h2>
            </Col>
            <Col xs={12} className="text-center mb-4">
              <span className="certificate-name">TrueNorth Administrator</span>
            </Col>
            <Col xs={12} className="text-center mb-4">
              <span className="certificate-earned">has earned</span>
              <br></br>
              <span className="certificate-credits">PD175: 1.0 Credit Hours</span>
            </Col>
            <Col xs={12} className="text-center mb-4">
              <span className="certificate-course-title">while completing the training course entitled</span>
            </Col>
            <Col xs={12} className="text-center mb-4">
              <span className="certificate-course-name">BPS PGS Initial PLO for Principals at Cluster Meetings</span>
            </Col>
            <Col xs={6} className="text-center mb-4">
              <span className="certificate-footer-text">Buffalo City School District</span>
              <div className="underline mt-2 mb-2" />
              <span className="certificate-signature">Crystal Benton Instructional Specialist II, Staff Development</span>
            </Col>
            <Col xs={6} className="text-center mb-4">
              <span className="certificate-footer-text">Date Completed</span>
              <div className="underline mt-2 mb-2" />
              <span className="certificate-dob">DOB:</span>
              <span className="certificate-ssn">Social Security # (last 4 digits)</span>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Certificate;
