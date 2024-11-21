import "./App.css";
import Parameters from "./components/inputs/Parameters";
import PredictOptimizeHandler from "./components/outputs/PredictOptimizeHandler";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <>
      <div className="main">
        <Topbar />
        <div className="main-layout">
          <Sidebar />
          <div className="other-content">
            <Parameters />
            <PredictOptimizeHandler/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
