import React, { useState, useEffect } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </h2>
    </div>
  );
}

export default Time;