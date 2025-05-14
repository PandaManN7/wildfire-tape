import React from 'react';
import { useNavigate } from 'react-router-dom';

function VHS1() {
  const navigate = useNavigate();

  return (
    <div className="tape-page">
      <h3>FOLLOW THE ROADS UNTIL YOU REACH THE LOWER 9TH OFF MAPLE AVENUE. IN ONE OF THE INTERSECTING PATHWAYS, A BRICK IS MISSING. THE TAPE IS HIDDEN INSIDE.</h3>
      <div className="video-wrapper">
        <iframe 
          width="860" 
          height="715" 
          src="https://www.youtube.com/embed/JrplH8qDn9E" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        >
        </iframe>

      </div>
      <button onClick={() => navigate(-1)} className="back-button">Back</button>
    </div>
  );
}

export default VHS1;