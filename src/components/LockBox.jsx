// src/components/Lockbox.jsx
import React, { useState } from 'react';
import './Lockbox.css';

function Lockbox() {
  const [input, setInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  const correctPassword = 'ISAWYOUINMYDREAMAGAIN'; 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password.');
    }
  };

  return (
    <div className="lockbox-container">
      {!isUnlocked ? (
        <form onSubmit={handleSubmit}>
          <h2>Enter Password to Access the Lockbox</h2>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter password"
          />
          <button type="submit">Unlock</button>
          {error && <p className="error">{error}</p>}
        </form>
      ) : (
        <div className="lockbox-content">
          <h2>🔓 Lockbox Unlocked!</h2>
    
        </div>
      )}
    </div>
  );
}

export default Lockbox;