import React from 'react';
import './loader.css'; // Import your CSS for styling

const Loader = () => {
  return (
    <div className="loader-container">
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWZlaTc0NmU4aTZvZnJqZWRocW5neDU0dTR1N3R5a3M4Zmd6MWF0NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3yxIuxEFHkeEyuxrgD/giphy.gif" alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Loader;
