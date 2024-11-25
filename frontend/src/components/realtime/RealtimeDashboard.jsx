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
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import './RealtimeDashboard.css';

const RealtimeDashboard = () => {
  // Sample data for display
  const metrics = [
    { label: "Casting Temp", value: "5.31", icon: faThermometerHalf },
    { label: "Cooling Water", value: "29.68", icon: faDroplet },
    { label: "Casting Speed", value: "732.84", icon: faTachometerAlt },
    { label: "Cast Bar Entry", value: "421.95", icon: faFire },
    { label: "Emulsion Temp", value: "25.52", icon: faGaugeHigh },
    { label: "Pressure at Rolling", value: "0.73", icon: faVial },
    { label: "Emulsion Conc.", value: "1.33", icon: faCompressAlt },
    { label: "Rod Quench", value: "5.68", icon: faDroplet },
  ];

  const feedback = [
    "Cooling Water Temperature has fluctuated by -6.53 units",
    "Cast Bar Temperature has fluctuated by -7.35",
  ];

  const output = {
    UTS: "452.5 MPa",
    Conductivity: "61.38 IACS",
    Elongation: "5.98%",
  };

  return (
    <div className="main">
      <Topbar />
      <div className="main-layout">
        <Sidebar />
        <div className="realtime-content">
          {/* Metrics Section */}
          <div className="metrics-section">
            <h2>Realtime Dashboard</h2>
            <div className="metrics-grid">
              {metrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <FontAwesomeIcon icon={metric.icon} size="2x" className="metric-icon"/>
                  <p>{metric.label}</p>
                  <h3>{metric.value}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback Section */}
          <div className="feedback-section">
            <h3>Feedback</h3>
            <ul>
              {feedback.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="view-alerts-btn">View Alerts</button>
          </div>

          {/* Output Section */}
          <div className="output-section">
            <h3>Output</h3>
            <p>UTS: {output.UTS}</p>
            <p>Conductivity: {output.Conductivity}</p>
            <p>Elongation: {output.Elongation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeDashboard;
