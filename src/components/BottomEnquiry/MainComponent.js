import React from 'react';
import EnquiryBlock from './EnquiryBlock';
import EnquiryFormModal from '../EnquiryForm';

const MainComponent = () => {
  const handleEnquiryClick = () => {
    // Handle button click, e.g., show the modal
    console.log('Enquiry button clicked');
  };

  return (
    <div className="main-container">
      <EnquiryBlock
        title="Interested in Our Services?"
        description="Fill out the enquiry form to get more information about our cricket services."
        buttonLabel="Enquire Now"
        onButtonClick={handleEnquiryClick}
      />
     
    </div>
  );
};

export default MainComponent;
