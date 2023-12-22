import React, { useState, useEffect } from 'react';

import '../css/countdown.css'
const CountdownTimer = () => {
  const initialTime = 24 * 60 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    
    <div className="timer-container">
      <h1 id="timer-heading">Today's</h1>
      <h1 id="timerrr-heading">Flash Sales</h1>
  <div class="square"></div>

      <p className="timer"> {formatTime(timeRemaining)}</p>
    </div>
  );
};

export default CountdownTimer;
