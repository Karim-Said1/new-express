import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './src/components/Navbar';
import Dashboard from "./src/pages/Dashboard";
import DriversLocations from "./src/pages/DriversLocations";
import RetailersLocations from "./src/pages/RetailersLocations";
import CBMCalculator from "./src/pages/CBMCalculator";
import TripAssignment from "./src/pages/TripAssignment";
import SupplierTripAssignment from "./src/pages/SupplierTripAssignment";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/drivers" element={<DriversLocations />} />
        <Route path="/RetailersLocations" element={<RetailersLocations />} />
        <Route path="/cbm" element={<CBMCalculator />} />
        <Route path="/trips" element={<TripAssignment />} />
        <Route path="/SupplierTripAssignment" element={<SupplierTripAssignment />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
