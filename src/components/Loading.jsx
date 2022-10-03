import React from "react";
import { useState, useEffect, CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import "../styles1.css";

const Loading = () => {
  const [charging, setCharging] = useState(false);
  useEffect(() => {
    setCharging(true);
    setTimeout(() => {
      setCharging(false);
    }, 8000);
  });
  return (
    <div className="Loading">
      <div className="Loading-container">
        <PacmanLoader
          color={"#FFC312"}
          loading={charging}
          size={30}
          height={900}
        />
      </div>
    </div>
  );
};

export default Loading;
