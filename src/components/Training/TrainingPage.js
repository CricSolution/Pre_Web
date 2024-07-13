import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faChalkboardTeacher, faUserTie, faRunning, faCertificate } from '@fortawesome/free-solid-svg-icons';
import './TrainingPage.css';
import module1 from "../../assests/Traning/module1.jpg";
import module3 from "../../assests/Traning/module2.jfif";
import module4 from "../../assests/Traning/module4.jfif";
import module2 from "../../assests/Traning/module3.jfif";

import certificate from "../../assests/Traning/cerificate.jfif";
import certificate2 from "../../assests/Traning/Certificates.png";

const sections = [
  {
    title: "Module 1 :Rules of Umpiring ",
    icon: faBalanceScale,
    content: "Understand the essential rules and regulations for effective umpiring.",
    duration: "20 mins",
    image: module1,
  },
  {
    title: "Module 2 : Internal Training Sessions ",
    icon: faChalkboardTeacher,
    content: "Participate in detailed internal training to improve your skills.",
    duration: "2 Hrs",
    image: module2,
  },
  {
    title: "Module 3 :Guests Training Sessions",
    icon: faUserTie,
    content: "Learn from experienced guests in our training sessions.",
    duration: "2 Hrs",
    image: module3,
  },
  {
    title: "Module 4 : On-Ground Training ",
    icon: faRunning,
    content: "Gain hands-on experience with on-ground training.",
    duration: "7 Days",
    image: module4,
  },
  {
    title: "Certification Exam",
    icon: faCertificate,
    content: "Test your knowledge and skills in the certification exam.",
    duration: "2 Hours",
    image: certificate,
  },
];

const TrainingPage = () => {
  return (
    <div className="container my-5 training-page">
      <div className="text-center mb-5">
        <h1>Umpiring Certification Training</h1>
        <p className="lead">Enhance your umpiring skills with our comprehensive training sessions.</p>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="row align-items-center my-3 section-container">
          <div className={`col-md-6 ${index % 2 === 0 ? '' : 'order-md-2'}`}>
            <div className="p-3 text-center text-md-start" style={{ margin: "0rem 4rem" }}>
              <FontAwesomeIcon icon={section.icon} className="icon mb-2" />
              <h5>{section.title}</h5>
              <p>{section.content}</p>
              <p><strong>Duration:</strong> {section.duration}</p>
            </div>
          </div>
          <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-2' : ''}`}>
            <img src={section.image} alt={section.title} className="img-fluid rounded hover-zoom training-image" />
          </div>
        </div>
      ))}

      <div className="text-center mt-5">
        <h2>Additional Perks</h2>
        <ul className="perk-list list-unstyled">
          <p>Customized Rule Book for Umpiring</p>
          <p>1 Month Internship (With Stipend)</p>
        </ul>
      </div>
      <div className='certificate' >
        <div>
          <h1>Sample Certificate</h1>
        </div>
        <img src={certificate2}/>
      </div>
    </div>
  );
}

export default TrainingPage;
