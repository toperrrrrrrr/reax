import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerts from "../alerts/Alerts";
import Sidebar from "../../fragments/Sidebar";
import Topbar from "../../fragments/Topbar";

const Dashboard = ({ capturedtime }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

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
      <Sidebar horiScroll={horiScroll} />
      <div className="wrapper-center">
        <Topbar logout={handleOpenPopup} />
        <div className="main-container">
          <div className="main-header">Kumpyot </div>
          <div className="main-blogs">
            <div className="main-blog ">
              <ul>
                <h1>
                  Create 4 page separate for 4 crud functions.
                </h1>
              </ul>
            </div>
            <div className="main-blog "></div>
            <div className="main-blog "></div>
          </div>
          <div className="small-header">LOREM IPSUM</div>
          <div className="contents">
            <div className="content" onClick={handleOpenPopup}>
              waw
            </div>
            <div className="content "></div>
            <div class="content"></div>
            <div class="content"></div>
          </div>
          <div className="main-header">LOREM </div>
          <div className="main-blogs">
            <div className="main-blog "></div>
            <div className="main-blog "></div>
            <div className="main-blog "></div>
          </div>
          <div className="small-header">LOREM IPSUM</div>
          <div className="contents">
            <div className="content "></div>
            <div class="content"></div>
            <div class="content"></div>
          </div>
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
