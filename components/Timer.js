import React, { useState, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerOn) {
      setTimerOn(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerOn) {
      clearInterval(timerRef.current);
      setTimerOn(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTimerOn(false);
    setTime(0);
  };

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins} mins ${secs} secs`;
  };

  return (
    <div>
      <h2>Timer</h2>
      <div>{formatTime(time)}</div>
      <button onClick={startTimer} style={{ backgroundColor: 'green' }}>Start</button>
      <button onClick={stopTimer} style={{ backgroundColor: 'red' }}>Stop</button>
      <button onClick={resetTimer} style={{ backgroundColor: 'yellow' }}>Reset</button>
    </div>
  );
};

export default Timer;
