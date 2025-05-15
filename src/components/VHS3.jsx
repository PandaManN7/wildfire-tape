import React from 'react';
import { useNavigate } from 'react-router-dom';

function VHS3() {
  const navigate = useNavigate();

  return (
    <div className="tape-page">
        <div className="Tape-text">
          <h3>STAY QUIET AND GO TO THE 2ND FLOOR OF THE LIBRARY. FIND THE MIDDLE AISLE UNTIL YOU REACH THE POETRY BOOKS. 
            BELOW THEM IS A METAL SHELF. OPEN IT UP CAREFULLY. THE FINAL TAPE IS UNDERNEATH.</h3>
        </div>
      <div className="video-wrapper">
        <div className="responsive-iframe">
        <iframe 
          src="https://www.youtube.com/embed/bs_FneYirxU" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        >
        </iframe>
      </div>
      </div>
      <button onClick={() => navigate(-1)} className="back-button">Back</button>
    </div>
  );
}

export default VHS3;