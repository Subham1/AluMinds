import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerHalf,
  faDroplet,
  faTachometerAlt,
  faFire,
  faGaugeHigh,
  faVial,
  faCompressAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Parameters.css";


const inputData = {
  "Casting Temperature": "5.50",
  "Cooling Water Temperature": "30.00",
  "Casting Speed": "735.00",
  "Cast Bar Entry Temperature": "422.00",
  "Emulsion Temperature": "26.00",
  "Emulsion Pressure": "0.80",
  "Emulsion Concentration": "1.50",
  "Rod Quench Water Pressure": "5.75",
  "Al%": "95%",
  "Cu%": "3%",
  "Mg%": "1%",
  "Ag%": "0.03%",
};


export default function Parameters({inputData}) {
  const parameters = [
    { icon: faThermometerHalf, label: "Casting Temperature", value: "5.31" },
    { icon: faDroplet, label: "Cooling Water Temperature", value: "29.68" },
    { icon: faTachometerAlt, label: "Casting Speed", value: "732.84" },
    { icon: faThermometerHalf, label: "Cast Bar Entry Temperature", value: "421.95" },
    { icon: faGaugeHigh, label: "Emulsion Temperature", value: "25.52" },
    { icon: faCompressAlt, label: "Emulsion Pressure", value: "0.73" },
    { icon: faVial, label: "Emulsion Concentration", value: "1.33" },
    { icon: faFire, label: "Rod Quench Water Pressure", value: "5.68" },
  ];

  const compositions = [
    { label: "Al%",  color: "#ff5722",value: "1.33" },
    { label: "Cu%",  color: "#2196f3",value: "1.33" },
    { label: "Mg%",  color: "#9c27b0",value: "1.33" },
    { label: "Ag%",  color: "#8b0000",value: "1.33" },
  ];

  // Grouping the data into rows
  const rows = [
    {
      parameters: parameters.slice(0, 4), // First row of parameters
      compositions: compositions.slice(0, 2), // First row of compositions
    },
    {
      parameters: parameters.slice(4, 8), // Second row of parameters
      compositions: compositions.slice(2, 4), // Second row of compositions
    },
  ];

  return (
    <div className="parameters-container">
      {rows.map((row, rowIndex) => (
        <div className="parameter-composition-row" key={rowIndex}>
          {/* Render parameter cards */}
          <div className="parameters-section">
            {row.parameters.map((param, index) => (
              <div className="parameter-card" key={index}>
                <FontAwesomeIcon icon={param.icon} className="parameter-icon" />
                
                <div className="val-label">
                  <div className="parameter-value">{inputData[param.label] || 'N/A'}</div>
                  <div className="parameter-label">{param.label}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Render chemical composition cards */}
          <div className="compositions-section">
            {row.compositions.map((comp, index) => (
              <div
                className="composition-card"
                key={index}
                style={{ borderColor: comp.color }}
              >
                <div
                  className="composition-circle"
                  style={{ backgroundColor: comp.color }}
                >
                  {comp.label}
                </div>
               
                <div className="composition-value">{inputData[comp.label] || 'N/A'}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
