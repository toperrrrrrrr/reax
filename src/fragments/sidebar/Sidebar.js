// Sidebar.js

import React from "react";
import "./Sidebar.css"; // Import the CSS file for styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <a href="#">Home</a>
        <a href="#">Dashboard</a>
        <a href="#">Settings</a>
        <a href="#">Messages</a>
        <a href="#">Log Out</a>
      </div>
    </div>
  );
};

export default Sidebar;
