import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

const App = () => {
  return (
    <div className="h-full min-h-[calc(100vh-120px)] bg-[#fcdc73] flex flex-col">
      <div className="flex-shrink-0">
        <Navbar />
      </div>
      <div className="flex-1">
        <Routes>
          <Route path="/*" element={<Hero />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
