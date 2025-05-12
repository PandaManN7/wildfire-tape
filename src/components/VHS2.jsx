import React from 'react';
import { useNavigate } from 'react-router-dom';

function VHS2() {
  const navigate = useNavigate();

  return (
    <div className="tape-page">
      <h2>Tape 2</h2>
      <div className="video-container">
        <video width="640" height="360" controls>
          <source src="/videos/Tape2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={() => navigate(-1)} className="back-button">Back</button>
      </div>
    </div>
  );
}

export default VHS2;