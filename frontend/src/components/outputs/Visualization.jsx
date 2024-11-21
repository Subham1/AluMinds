import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Visualization.css";

const Visualization = ({ conductivity, elongation, uts }) => {
  return (
    <div className="visualization-container">
      <div className="circle">
        <CircularProgressbar
          value={conductivity}
          text={`${conductivity} IACS`}
          styles={buildStyles({
            textSize: "16px",
            textColor: "#114b43",
            pathColor: "#0ca678",
            trailColor: "#e6f7f0",
          })}
        />
        <p>CONDUCTIVITY</p>
      </div>
      <div className="circle">
        <CircularProgressbar
          value={elongation}
          text={`${elongation}%`}
          styles={buildStyles({
            textSize: "16px",
            textColor: "#114b43",
            pathColor: "#62b4f9",
            trailColor: "#e7f3fc",
          })}
        />
        <p>ELONGATION</p>
      </div>
      <div className="circle">
        <CircularProgressbar
          value={uts}
          text={`${uts} MPa`}
          styles={buildStyles({
            textSize: "16px",
            textColor: "#114b43",
            pathColor: "#e94c4c",
            trailColor: "#fbe6e6",
          })}
        />
        <p>UTS</p>
      </div>
    </div>
  );
};

export default Visualization;
