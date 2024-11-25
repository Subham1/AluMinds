import "./App.css";
import "./components/inputs/Dashboard.css";
import React from "react";
import Dashboard from "./components/inputs/Dashboard";
import RealtimeDashboard from "./components/realtime/RealtimeDashboard";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
     <Router>
      <Routes>
        {/* Route for Login page */}
        <Route path="/login" element={<Login />} />
        
        {/* Route for Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Route for Realtime Dashboard page */}
        <Route path="/realtime-dashboard" element={<RealtimeDashboard />} />

        {/* Redirect to login page by default if no other path matches */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
