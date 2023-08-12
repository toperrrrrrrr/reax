import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerts from "../alerts/Alerts";
import Sidebar from "../../fragments/Sidebar";
import Topbar from "../../fragments/Topbar";
import Dash from "../../fragments/Dash";
import Crud from "../../fragments/Crud";
import Dash3 from "../../fragments/Dash3";
import Dash4 from "../../fragments/Dash4";

const Dashboard = ({ capturedtime }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showDashboard_1, setDashboard1] = useState(true);
  const [showDashboard_2, setDashboard2] = useState(false);
  const [showDashboard_3, setDashboard3] = useState(false);
  const [showDashboard_4, setDashboard4] = useState(false);

  const showDashboard1 = () => {
    setDashboard2(false)
    setDashboard3(false)
    setDashboard1(true);
  };

  const showDashboard2 = () => {
    setDashboard3(false)
    setDashboard1(false);
    
    setDashboard4(false);
    setDashboard2(true)
  }; 
  
  const showDashboard3 = () => {
    setDashboard4(false);
    setDashboard1(false);
    setDashboard2(false);
    setDashboard3(true);
  };

    
  const showDashboard4 = () => {

    setDashboard1(false);
    setDashboard2(false);
    setDashboard3(false);
    setDashboard4(true);
  };
  

  


  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleConfirmAction = () => {
    navigate("/");
    if (setShowPopup) {
      return <redirect to="/" />;
    }
    setShowPopup(false);
  };


  return (
    <div className="bg-container">
      <Sidebar
        Dash1={showDashboard1}
        Dash2={showDashboard2}
        Dash3={showDashboard3}
        Dash4={showDashboard4}
      />
      <div className="wrapper-center">
        <Topbar logout={handleOpenPopup} />
        <div className="main-container">
          {showDashboard_1 && <Crud />}
          {showDashboard_2 && <Dash />}
          {showDashboard_3 && <Dash3 />}
          {showDashboard_4 && <Dash4 />}
        </div>
      </div>

      <Alerts
        isOpen={showPopup}
        title="Log Out?"
        message="Are you sure you want to Log out?"
        onClose={handleClosePopup}
        onConfirm={handleConfirmAction}
      />
    </div>
  );
};

export default Dashboard;