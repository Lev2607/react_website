import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Aktualisieren Sie die Uhrzeit alle 1 Sekunde
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Aufräumen, wenn die Komponente entladen wird
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return <div className="clock">{formattedTime}</div>;
}

