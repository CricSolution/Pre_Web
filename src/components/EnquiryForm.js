import React, { useEffect, useState } from "react";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaMapMarkerAlt, FaUsers, FaRegFutbol } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./EnquiryForm.css";

const EnquiryFormModal = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [groundName, setGroundName] = useState("");
  const [location, setLocation] = useState("");
  const [numUmpires, setNumUmpires] = useState("");
  const [matchFormat, setMatchFormat] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDates, setSelectedDates] = useState("");
  const [datesValid, setDatesValid] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const path = useLocation();
  const [url, setUrl] = useState(path.pathname);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleShowDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setSelectedDates(
      `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`
    );
    setShowDatePicker(false);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    setShowModal(false);
  };

  useEffect(() => {
    setUrl(path.pathname);
    console.log(url
    )
  }, [path.pathname]);

  // Function to get the appropriate label text based on the URL
  const getDynamicLabel = (url) => {
    switch (url) {
      case "/umpire":
      case "/hire-umpire":
        return "Number of Umpires *";
      case "/hire-score":
        return "Scores";
      case "/hire-comentator":
        return "Number of Commentators *";
      default:
        return "Number of Umpires *";
    }
  };
  const umpire=()=>{
    return <>
    </>
  }
  const score=()=>{
    return <>
    </>
  }
  const Commentator=()=>{
    return <>
    </>
  }
  const match=()=>{
    return <>
    </>
  }

  return (
    <>
      <button className="" style={{backgroundColor:"inherit",border:"none",color:"white"}} onClick={handleShowModal}>
        Register
      </button>

      <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false} size={role === "umpire" ? "lg" : "lg"}>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={url === "/umpire" ? 10 : 6} style={url === "/umpire" ? { width: "80%", margin: "auto" } : {}}>
                <Form.Group controlId="role" className="mb-3">
                  <Form.Label><FaUser /> Your Role</Form.Label>
                  <Form.Control
                    as="select"
                    value={url === "/umpire" ? "Umpire" : "Organiser"}
                    onChange={(e) => setRole(e.target.value)}
                    required>
                    {url === "/umpire" ? <option value="Umpire">Umpire</option> : <option value="organizer">Organizer</option>}
                  </Form.Control>
                </Form.Group>
                <hr />
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label><FaUser /> Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <hr />
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label><FaEnvelope /> Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <hr />
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
                      };
                    }}
                    onInput={(e) => e.target.setCustomValidity("")}
                    required
                  />
                </Form.Group>
                <hr />
                <Form.Group controlId="dates" className="mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label><FaCalendar /> Interested Dates</Form.Label>
                    <Button
                      variant="outline-dark"
                      onClick={handleShowDatePicker}
                    >
                      {selectedDates ? selectedDates : "Select Dates"}
                    </Button>
                  </div>
                  {!datesValid && <div>Please select dates.</div>}
                  {showDatePicker && (
                    <DatePicker
                      selected={startDate}
                      onChange={handleDateChange}
                      startDate={startDate}
                      endDate={endDate}
                      minDate={new Date()}
                      selectsRange
                    />
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                {url !== "/umpire" && (
                  <>
                    <Form.Group controlId="groundName" className="mb-3">
                      <Form.Label><FaRegFutbol /> Ground Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={groundName}
                        onChange={(e) => setGroundName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <hr />
                    <Form.Group controlId="location" className="mb-3">
                      <Form.Label><FaMapMarkerAlt /> Location</Form.Label>
                      <Form.Control
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <hr />
                    <Form.Group controlId="numUmpires" className="mb-3" style={url==="/match-with-us"?{display:"none"}:{}}>
                      <Form.Label><FaUsers /> {getDynamicLabel(url)}</Form.Label>
                      <Form.Control
                        type="number"
                        value={numUmpires}
                        onChange={(e) => setNumUmpires(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <hr />
                    <Form.Group controlId="matchFormat" className="mb-3">
                      <Form.Label><FaRegFutbol /> Match Format</Form.Label>
                      <Form.Control
                        type="text"
                        value={matchFormat}
                        onChange={(e) => setMatchFormat(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <hr />
                  </>
                )}
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

export default EnquiryFormModal;
