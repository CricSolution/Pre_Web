// LandingPage.js
import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';
import TrainingPage from '../../components/Training/TrainingPage';
import "./landing.css"
import Certificate from '../../components/Certificate/Certificate';

const LandingPage = () => {
  return (
    <>
    <main className="main-content">
        <TrainingPage />
        
      </main>
   <Certificate/>
      </>
  );
};

export default LandingPage;