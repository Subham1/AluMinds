import React from "react";
import "./PredictOptimize.css";

const PredictOptimize = ({ onPredict, onOptimize }) => {
  return (
    <div className="predict-optimize-container">
      <button className="predict-button" onClick={onPredict}>
        PREDICT
      </button>
      <div className="feedback-box">
        <h3 className="feedback-title">ML FEEDBACK</h3>
        <p className="feedback-text">ELONGATION IS MORE</p>
        <button className="optimize-button" onClick={onOptimize}>
          OPTIMIZE
        </button>
      </div>
    </div>
  );
};

export default PredictOptimize;
