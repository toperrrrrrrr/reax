import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerts from "../alerts/Alerts";
import Sidebar from "../../fragments/Sidebar";
import Topbar from "../../fragments/Topbar";
import Dash from "../../fragments/Dash";
import Crud from "../../fragments/Crud";

const Dashboard = ({ capturedtime }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showDashboard, setDashboard] = useState(true);

  const showDashboard1 = () => {
    setDashboard(true);
  };

  const showDashboard2 = () => {
    setDashboard(false);
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

  const horiScroll = () => {
    navigate("/HorizontalScroll");

    return <redirect to="/HorizontalScroll" />;
  };

  return (
    <div className="bg-container">
      <Sidebar
        horiScroll={horiScroll}
        Dash1={showDashboard1}
        Dash2={showDashboard2}
      />
      <div className="wrapper-center">
        <Topbar logout={handleOpenPopup} />
        <div className="main-container">
          {showDashboard ? <Dash /> : <Crud />}
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