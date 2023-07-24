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
      <Sidebar horiScroll={horiScroll} logout={handleOpenPopup} />

      <div className="wrapper1">
        <div className="header ">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="user-settings">
            <img
              className="user-img"
              src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/301266446_3419967004994019_5330432090560501717_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFk9Lk0rTvRIrh2rmVE-Bs7AYr_cB8HkJ4Biv9wHweQnlh-H-jMzPf5T_z6wOU87_Zzuv52wWrExXl-oU4rhFsE&_nc_ohc=Qr3n1gnyQ5YAX_Rw4Zh&_nc_ht=scontent.fcrk1-4.fna&oh=00_AfASJux6YtWKe_jy7eeONsIwOtOh5ZGErBVN4Uf-39CklQ&oe=64C319E2"
              alt=""
            />
            <div className="user-name">Nori</div>
            <svg viewBox="0 0 492 492" fill="currentColor">
              <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
            </svg>
            <div className="notify">
              <div className="notification"></div>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
                />
              </svg>
            </div>
          </div>
        </div>
      
          <div>
            <div className="dashboard-box">
              <div className="login-box">
                <Clock />
              </div>
              <ul>
                <h1>
                  <li>
                    Create a button that says clock in and a text box that will
                    show you the time. After clicking the button, the button
                    will change to red and make it as clock out instead of green
                    clock in.
                  </li>
                  <li>Create more divs for different containers</li>
                  <li>
                    Make another h1 that will show what time and date wasthe
                    clock in or out.
                  </li>
                  <li>
                    Create different pages that will be inserted on this
                    dashboard pag that will show different functionalities
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
