import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerts from "../alerts/Alerts";
import Sidebar from "../../fragments/Sidebar";
import Topbar from "../../fragments/Topbar";
import Home from "../../fragments/Home";
import Crud from "../../fragments/Crud";

import Empty from "../../fragments/Empty";
import Dash3 from "../../fragments/Dash3";

const Dashboard = ({ capturedtime }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showHome, setHome] = useState(true);
  const [showCrud, setCrud] = useState(false);
  const [showDashboard_2, setDashboard2] = useState(false);
  const [showDashboard_3, setDashboard3] = useState(false);

  const showHomeP = () => {
    setHome(true);
    setCrud(false);

    setDashboard2(false)
    setDashboard3(false)
  };
  
  const showCrudP = () => {
    setHome(false);
    setCrud(true);

    setDashboard2(false);
    setDashboard3(false);
  };

  const showDashboard2 = () => {
    setHome(false);
    setCrud(false);

    setDashboard3(false)
    setDashboard2(true)
  }; 
  
  const showDashboard3 = () => {  
    setCrud(false);
    setHome(false);

    setDashboard2(false);
    setDashboard3(true);
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
        Home={showHomeP}
        Crud={showCrudP}
        Empty={showDashboard2}
        Dash3={showDashboard3}
      />
      <div className="wrapper-center">
        <Topbar logout={handleOpenPopup} />
        <div className="main-container">
          {showHome && <Home />}
          {showCrud && <Crud />}
          {showDashboard_2 && <Empty />}
          {showDashboard_3 && <Dash3 />}
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