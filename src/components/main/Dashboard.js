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
          <div className="main-header">LOREM </div>
          <div className="main-blogs">
            <div className="main-blog ">
              <ul>
                <li>
                  Create a button that says clock in and a text box that will
                  show you the time. After clicking the button, the button will
                  change to red and make it as clock out instead of green clock
                  in.
                </li>
                <li>
                  Create different pages that will be inserted on this dashboard
                  pag that will show different functionalities
                </li>
                <li>
                  Edit the Alerts for this page. Make it unniform with other
                  page
                </li>
                <li>add a check box for keep me signed in</li>
                <li>
                  Make a onKeypress function that will trigger the handlelogin
                  function
                </li>
                <li>
                  make sure that every actions are being logged into the back
                  end
                </li>
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
            <div className="main-blog ">
            </div>
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
