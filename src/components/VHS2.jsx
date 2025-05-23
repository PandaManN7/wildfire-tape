import React from 'react';
import { useNavigate } from 'react-router-dom';

function VHS2() {
  const navigate = useNavigate();

  return (
    <div className="tape-page">
      <div className="Tape-text">
        <h3>IN THIS PARK, FOLLOW THE SIDEWALK ALONG THE LAKE. ONCE YOU'RE IN THE MIDDLE OF THE PARK—PARALLEL WITH THE AMPHITHEATER—LOOK OVER THE RAILING. THERE’S 
          A CONCRETE SLAB WITH A METAL INTERIOR. THE TAPE LIES SOMEWHERE INSIDE.</h3>
      </div>
      <div className="video-wrapper">
        <div className="responsive-iframe">
        <iframe 
          src="https://www.youtube.com/embed/Uw8KlHPM-Dw" 
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

export default VHS2;