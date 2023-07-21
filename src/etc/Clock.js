import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [capturedTime, setCapturedTime] = useState(null);

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    setCurrentDate(currentDate.toDateString());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const captureTime = () => {
    setCapturedTime(time.toLocaleTimeString());
  };

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      <button onClick={captureTime}>Capture Time</button>
      <p>{currentDate}</p>
      {capturedTime && <p>Captured Time: {capturedTime}</p>}
    </div>
  );
};

export default Clock;
