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
    <span className="time">
      <h2 className="clock">{time.toLocaleTimeString()}</h2>
      <button className="clock" onClick={captureTime} hidden >Capture Time</button>
      <p className="clock" hidden>{currentDate}</p>
      {capturedTime && <p hidden> Captured Time: {capturedTime}</p>}
    </span>
  );
};

export default Clock;
