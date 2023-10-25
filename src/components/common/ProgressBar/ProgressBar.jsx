import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ value, duration, color, backgroundColor, subjects }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      let startTime;
      const animate = (time) => {
        if (!startTime) startTime = time;
        const progress = (time - startTime) / duration;
        if (progress < 1) {
          setWidth(progress * value);
          requestAnimationFrame(animate);
        } else {
          setWidth(value);
        }
      };

      requestAnimationFrame(animate);
    };

    updateProgress();
  }, [value, duration]);
  return (
    <div className="porgressbar__">
      <div className="subject__progress">{subjects?.join(", ")}</div>
      <div className="progressbar__full">
        <div
          className="progressbar__container"
          style={{ backgroundColor: `${backgroundColor}` }}
        >
          <div
            className="progressbar"
            style={{
              width: `${width}%`,
              backgroundColor: `${color}`
            }}
          ></div>
        </div>
        <div style={{ color: `${color}`, fontWeight: 600 }}>
          {Math.floor(width)}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
