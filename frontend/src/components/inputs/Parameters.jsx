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

export default function Parameters() {
  const parameters = [
    { icon: faThermometerHalf, label: "Casting Temp.", value: "5.31" },
    { icon: faDroplet, label: "Cooling Water", value: "29.68" },
    { icon: faTachometerAlt, label: "Casting Speed", value: "732.84" },
    { icon: faThermometerHalf, label: "Cast Bar Entry", value: "421.95" },
    { icon: faGaugeHigh, label: "Emulsion Temp.", value: "25.52" },
    { icon: faCompressAlt, label: "Pressure at Rolling", value: "0.73" },
    { icon: faVial, label: "Emulsion Concentration", value: "1.33" },
    { icon: faFire, label: "Rod Quench", value: "5.68" },
  ];

  const compositions = [
    { label: "Al", value: "94.42%", color: "#ff5722" },
    { label: "Cu", value: "0.06%", color: "#2196f3" },
    { label: "Mg", value: "0.03%", color: "#9c27b0" },
    { label: "Ag", value: "0.03%", color: "#8b0000" },
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
                  <div className="parameter-value">{param.value}</div>
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
                <div className="composition-value">{comp.value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
