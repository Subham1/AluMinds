import React, { useState } from "react";
import Parameters from "./Parameters";
import PredictOptimize from "../outputs/PredictOptimize";
import Visualization from "../outputs/Visualization";
import LineGraphs from "../charts/LineGraphs.jsx";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import axios from "axios";
import Modal from "react-modal";
Modal.setAppElement("#root");
import "./Dashboard.css";
import PredictOptimizeHandler from "../outputs/PredictOptimizeHandler";
export default function Dashboard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [optimizeModalIsOpen, setOptimizeModalIsOpen] = useState(false);
  const [inputData, setInputData] = useState({
    "Al%": "",
    "Cu%": "",
    "Mg%": "",
    "Ag%": "",
    "Casting Temperature": "",
    "Cooling Water Temperature": "",
    "Casting Speed": "",
    "Cast Bar Entry Temperature": "",
    "Emulsion Temperature": "",
    "Emulsion Pressure": "",
    "Emulsion Concentration": "",
    "Rod Quench Water Pressure": "",
  });
  const [output, setOutput] = useState({
    UTS: null,
    Elongation: null,
    Conductivity: null,
  });
  const [optimizeData, setOptimizeData] = useState({
    "UTS (MPa)": "",
    "Elongation (%)": "",
    "Conductivity (S/m)": "",
  });
  const [mlFeedback, setMlFeedback] = useState("");

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    const openOptimizeModal = () => setOptimizeModalIsOpen(true);
    const closeOptimizeModal = () => setOptimizeModalIsOpen(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }));
        
    };
    
    const handleOptimizeInputChange = (e) => {
        const { name, value } = e.target;
        setOptimizeData((prevState) => {
            const updatedOptimizeData = {
              ...prevState,
              [name]: value,
            };
      
            // Update output state to reflect specific fields from optimizeData
            setOutput((prevOutput) => ({
              ...prevOutput,
              // Update only the specific fields (e.g., UTS, Elongation, Conductivity)
              UTS: updatedOptimizeData['UTS (MPa)'], // You can set UTS to castingTemperature or any other field as needed
              Elongation: updatedOptimizeData['Elongation (%)'], // Similarly for Elongation
              Conductivity: updatedOptimizeData['Conductivity (S/m)'] // And Conductivity
            }));
      
            return updatedOptimizeData;
          });
        
       
        
    };
   

  const handlePredict = () => {
    const numericInputData = Object.fromEntries(
      Object.entries(inputData).map(([key, value]) => [key, parseFloat(value)])
    );

    axios
      .post("http://localhost:5000/predict", numericInputData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        setOutput({
          UTS: data["UTS (MPa)"] - 200,

          Elongation: data["Elongation (%)"],
          Conductivity: data["Conductivity (S/m)"],
        });
        console.log(data["UTS (MPa)"]);
        setMlFeedback(() => {
          let feedback = "";

          // Check elongation
          if (data["Elongation (%)"] < 4) {
            feedback += "ELONGATION IS LESS.\n";
          } else if (data["Elongation (%)"] > 15) {
            feedback += "ELONGATION IS MORE.\n";
          } else {
            feedback += "ELONGATION IS OK.\n";
          }

          // Check conductivity
          if (data["Conductivity (S/m)"] > 64) {
            feedback += "CONDUCTIVITY IS MORE.\n";
          } else if (data["Conductivity (S/m)"] < 59) {
            feedback += "CONDUCTIVITY IS LESS.\n";
          } else {
            feedback += "CONDUCTIVITY IS OK.\n";
          }

          // Check UTS if needed
          if (data["UTS (MPa)"] > 500) {
            feedback += "UTS IS HIGH.\n";
          } else if (data["UTS (MPa)"] < 400) {
            feedback += "UTS IS LOW.\n";
          } else {
            feedback += "UTS IS WITHIN RANGE.\n";
          }

          return feedback.trim(); // Trim to remove trailing newline
        });

        closeModal();
        ``;

        
            axios.post('http://localhost:5001/save', {
                type: 'prediction',
                input: numericInputData,
                output: {
                    UTS: data['UTS (MPa)'],
                    Elongation: data['Elongation (%)'],
                    Conductivity: data['Conductivity (S/m)']
                }
                
            })
            .catch(error => {
                console.error('Error saving prediction:', error);
            });
            console.log("saved");
      })
      .catch((error) => {
        console.error("Error during prediction:", error);
      });
  };
  const handleOptimize = () => {
    const numericOptimizeData = Object.fromEntries(
      Object.entries(optimizeData).map(([key, value]) => [
        key,
        parseFloat(value),
      ])
    );

    if (numericOptimizeData.UTS !== undefined) {
      numericOptimizeData.UTS += 200;
    }

    axios
      .post("http://localhost:5000/optimize", numericOptimizeData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;

        // Update inputData state with optimization results
        setInputData({
          "Al%": parseFloat(data["Al%"]).toFixed(2),
          "Cu%": parseFloat(data["Cu%"]).toFixed(2),
          "Mg%": parseFloat(data["Mg%"]).toFixed(2),
          "Ag%": parseFloat(data["Ag%"]).toFixed(2),
          "Casting Temperature": parseFloat(
            data["Casting Temperature"]
          ).toFixed(2),
          "Cooling Water Temperature": parseFloat(
            data["Cooling Water Temperature"]
          ).toFixed(2),
          "Casting Speed": parseFloat(data["Casting Speed"]).toFixed(2),
          "Cast Bar Entry Temperature": parseFloat(
            data["Cast Bar Entry Temperature"]
          ).toFixed(2),
          "Emulsion Temperature": parseFloat(
            data["Emulsion Temperature"]
          ).toFixed(2),
          "Emulsion Pressure": parseFloat(data["Emulsion Pressure"]).toFixed(2),
          "Emulsion Concentration": parseFloat(
            data["Emulsion Concentration"]
          ).toFixed(2),
          "Rod Quench Water Pressure": parseFloat(
            data["Rod Quench Water Pressure"]
          ).toFixed(2),
        });

        setMlFeedback(`Optimization completed. Inputs updated.`);
        closeOptimizeModal();
        
            axios.post('http://localhost:5001/save', {
                type: 'optimization',
                input: numericOptimizeData,
                output: {
                    'Al%': data['Al%'],
                    'Cu%': data['Cu%'],
                    'Mg%': data['Mg%'],
                    'Ag%': data['Ag%'],
                    'Casting Temperature': data['Casting Temperature'],
                    'Cooling Water Temperature': data['Cooling Water Temperature'],
                    'Casting Speed': data['Casting Speed'],
                    'Cast Bar Entry Temperature': data['Cast Bar Entry Temperature'],
                    'Emulsion Temperature': data['Emulsion Temperature'],
                    'Emulsion Pressure': data['Emulsion Pressure'],
                    'Emulsion Concentration': data['Emulsion Concentration'],
                    'Rod Quench Water Pressure': data['Rod Quench Water Pressure']
                }
            })
            .catch(error => {
                console.error('Error saving optimization:', error);
            });
       
      })
      .catch((error) => {
        console.error("Error during optimization:", error);
      });
  };

  // Calculate "Others" value
  const sumOfChemicals =
    parseFloat(inputData["Al%"] || 0) +
    parseFloat(inputData["Cu%"] || 0) +
    parseFloat(inputData["Mg%"] || 0) +
    parseFloat(inputData["Ag%"] || 0);
  const others = (100 - sumOfChemicals).toFixed(2);

  return (
    <>
      <div className="main">
        <Topbar />
        <div className="main-layout">
          <Sidebar />
          <div className="other-content">
            <Parameters inputData={inputData} />
            <div className="dashboard-row">
              <PredictOptimize
                mlFeedback={mlFeedback}
                openModal={openModal}
                openOptimizeModal={openOptimizeModal}
              />
              <Visualization
                conductivity={
                  output.Conductivity
                    ? output.Conductivity.toString().substring(0, 5)
                    : "N/A"
                }
                elongation={
                  output.Elongation
                    ? output.Elongation.toString().substring(0, 5)
                    : "N/A"
                }
                uts={output.UTS ? output.UTS.toString().substring(0, 5) : "N/A"}
              />
              
            </div>
            <LineGraphs/>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Predict Form"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Input Data for Prediction</h2>
        <form className="form-grid">
          {Object.keys(inputData).map((key) => (
            <label key={key}>
              {key}:
              <input
                type="number"
                name={key}
                value={inputData[key]}
                onChange={handleInputChange}
              />
            </label>
          ))}
        </form>
        <button onClick={handlePredict}>PREDICT</button>
      </Modal>

      <Modal
        isOpen={optimizeModalIsOpen}
        onRequestClose={closeOptimizeModal}
        contentLabel="Optimize Form"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Input Data for Optimization</h2>
        <form className="form-grid">
          {Object.keys(optimizeData).map((key) => (
            <label key={key}>
              {key}:
              <input
                type="number"
                name={key}
                value={optimizeData[key]}
                onChange={handleOptimizeInputChange}
              />
            </label>
          ))}
        </form>
        <button onClick={handleOptimize}>OPTIMIZE</button>
      </Modal>
    </>
  );
}
