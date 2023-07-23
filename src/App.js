import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Login from "./components/logforms/Login";
import Dashboard from "./components/main/Dashboard";
import NoPage from "./components/errors/404";
import Register from "./components/logforms/Register";
import HorizontalScroll from "./etc/HorizontalScroll";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/HorizontalScroll" element={<HorizontalScroll />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
