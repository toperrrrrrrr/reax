import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerts from "../alerts/Alerts";
import Clock from "../../etc/Clock";
import Sidebar from "../../fragments/sidebar/Sidebar";

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
    <div className="screen-bg">

<Sidebar

logout={handleOpenPopup}/>
      <div class="wrapper ">
        <div>
          <div className="dashboard-box">
            <div className="login-box">
              <Clock />
            </div>
            <ul>
              <h1>
                <li>
                  Create a button that says clock in and a text box that will
                  show you the time. After clicking the button, the button will
                  change to red and make it as clock out instead of green clock
                  in.
                </li>
                <li>Create more divs for different containers</li>
                <li>
                  Make another h1 that will show what time and date wasthe clock
                  in or out.
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
                <li>Move the Eye button to next the password field</li>
                <li>
                  Make a onKeypress function that will trigger the handlelogin
                  function
                </li>
                <li>
                  make sure that every actions are being logged into the back
                  end
                </li>
              </h1>
            </ul>
          </div>

          <Alerts
            isOpen={showPopup}
            title="Log Out?"
            message="Are you sure you want to Log out?"
            onClose={handleClosePopup}
            onConfirm={handleConfirmAction}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
