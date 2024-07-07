import React, { useState } from "react";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhone, FaSortNumericUp } from "react-icons/fa";


const EnquiryModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSubmit = () => {
    // Handle form submission logic here
    // For example, you can validate fields and then close the modal
    setShowModal(false);
  };

  return (
    <>
      <Button variant="light" className="mt-0 enquiry-button" style={{
      }} onClick={handleShowModal}>
        Enquire now 
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false} size="md">
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={12} style={{ width: "80%", margin: "auto" }}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label><FaUser /> Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label><FaEnvelope /> Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="phoneNumber" className="mb-3">
                  <Form.Label><FaPhone /> Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    pattern="[6-9][0-9]{9}"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onBlur={(e) => {
                      if (!e.target.checkValidity()) {
                        e.target.setCustomValidity("Please enter a valid Mobile number. Should follow [6-9][0-9]{9}");
                      }
                    }}
                    onInput={(e) => e.target.setCustomValidity("")}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="message" className="mb-3">
                  <Form.Label><FaSortNumericUp /> Message</Form.Label>
                  <Form.Control
                    as="textarea" // Change input to textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4} // Number of visible rows
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EnquiryModal;
