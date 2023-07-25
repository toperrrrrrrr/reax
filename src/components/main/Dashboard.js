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
    <div class="bg-container">
    <div class="sidebar">
      <span class="logo">
        S
        <a class="logo-expand" href="#">
          Skateboard
        </a>
      </span>
      <div class="side-wrapper">
        <div class="side-title">MENU</div>
        <div class="side-menu">
          <a class="sidebar-link is-active" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z" />
            </svg>
            Discover
          </a>
          <a class="sidebar-link " href="#">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.835 12.007l.002.354c.012 1.404.096 2.657.242 3.451 0 .015.16.802.261 1.064.16.38.447.701.809.905a2 2 0 00.91.219c.249-.012.66-.137.954-.242l.244-.094c1.617-.642 4.707-2.74 5.891-4.024l.087-.09.39-.42c.245-.322.375-.715.375-1.138 0-.379-.116-.758-.347-1.064-.07-.099-.18-.226-.28-.334l-.379-.397c-1.305-1.321-4.129-3.175-5.593-3.79 0-.013-.91-.393-1.343-.407h-.057c-.665 0-1.286.379-1.603.991-.087.168-.17.496-.233.784l-.114.544c-.13.874-.216 2.216-.216 3.688zm-6.332-1.525C3.673 10.482 3 11.162 3 12a1.51 1.51 0 001.503 1.518l3.7-.328c.65 0 1.179-.532 1.179-1.19 0-.658-.528-1.191-1.18-1.191l-3.699-.327z"
              />
            </svg>
            Trending
          </a>
        </div>
      </div>
      <div class="side-wrapper">
        <div class="side-title">CATEGORY</div>
        <div class="side-menu">
          <a class="sidebar-link" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.164 6.083l.948.011c3.405 0 5.888 2.428 5.888 5.78v4.307c0 3.353-2.483 5.78-5.888 5.78A193.5 193.5 0 0112.01 22c-1.374 0-2.758-.01-4.122-.038-3.405 0-5.888-2.428-5.888-5.78v-4.307c0-3.353 2.483-5.78 5.898-5.78 1.286-.02 2.6-.04 3.935-.04v-.163c0-.665-.56-1.204-1.226-1.204h-.972c-1.109 0-2.012-.886-2.012-1.965 0-.395.334-.723.736-.723.412 0 .736.328.736.723 0 .289.246.52.54.52h.972c1.481.01 2.688 1.194 2.698 2.64v.183c.619 0 1.238.008 1.859.017zm-4.312 8.663h-1.03v1.02a.735.735 0 01-.737.723.728.728 0 01-.736-.722v-1.021H7.31a.728.728 0 01-.736-.723c0-.395.334-.722.736-.722h1.04v-1.012c0-.395.324-.723.736-.723.403 0 .736.328.736.723v1.012h1.03c.403 0 .737.327.737.722a.728.728 0 01-.736.723zm4.17-1.629h.099a.728.728 0 00.736-.722.735.735 0 00-.736-.723h-.098a.722.722 0 100 1.445zm1.679 3.315h.098a.728.728 0 00.736-.723.735.735 0 00-.736-.723H16.7a.722.722 0 100 1.445z"
              />
            </svg>
            Live Stream
          </a>
        </div>
      </div>
    </div>
    <div class="top-wrapper">
      <div class="header">
        <div class="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div class="user-settings">
          <img
            class="user-img"
            src="https://images.unsplash.com/photo-1587918842454-870dbd18261a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=943&q=80"
            alt=""
          />
          <div class="user-name">Thomas</div>
          <svg viewBox="0 0 492 492" fill="currentColor">
            <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
          </svg>
          <div class="notify">
            <div class="notification"></div>
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
      <div class="main-container">
        <div class="main-header ">Discover</div>
        <div class="main-blogs">
          <div class="main-blog "></div>
          <div class="main-blog "></div> <div class="main-blog "></div>
          <div class="main-blog "></div>
        </div>
        <div class="small-header">Most Watched</div>
        <div class="videos">
          <div class="video"></div>
          <div class="video "></div>
          <div class="video"></div>
          <div class="video"></div>
        </div>
      </div>
    </div>
  </div>

    
    // <div className="screen-bg">
    //   <Sidebar horiScroll={horiScroll} logout={handleOpenPopup} />

    //   <div className="wrapper1">
    //     <div className="header ">
    //       <div className="search-bar">
    //         <input type="text" placeholder="Search" />
    //       </div>
    //       <div className="user-settings">
    //         <img
    //           className="user-img"
    //           src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/301266446_3419967004994019_5330432090560501717_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFk9Lk0rTvRIrh2rmVE-Bs7AYr_cB8HkJ4Biv9wHweQnlh-H-jMzPf5T_z6wOU87_Zzuv52wWrExXl-oU4rhFsE&_nc_ohc=Qr3n1gnyQ5YAX_Rw4Zh&_nc_ht=scontent.fcrk1-4.fna&oh=00_AfASJux6YtWKe_jy7eeONsIwOtOh5ZGErBVN4Uf-39CklQ&oe=64C319E2"
    //           alt=""
    //         />
    //         <div className="user-name">Nori</div>
    //         <svg viewBox="0 0 492 492" fill="currentColor">
    //           <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
    //         </svg>
    //         <div className="notify">
    //           <div className="notification"></div>
    //           <svg viewBox="0 0 24 24" fill="currentColor">
    //             <path
    //               fill-rule="evenodd"
    //               clip-rule="evenodd"
    //               d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
    //             />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
      
    //       <div>
    //         <div className="dashboard-box">
    //           <div className="login-box">
    //             <Clock />
    //           </div>
    //           <ul>
    //             <h1>
    //               <li>
    //                 Create a button that says clock in and a text box that will
    //                 show you the time. After clicking the button, the button
    //                 will change to red and make it as clock out instead of green
    //                 clock in.
    //               </li>
    //               <li>Create more divs for different containers</li>
    //               <li>
    //                 Make another h1 that will show what time and date wasthe
    //                 clock in or out.
    //               </li>
    //               <li>
    //                 Create different pages that will be inserted on this
    //                 dashboard pag that will show different functionalities
    //               </li>
    //               <li>
    //                 Edit the Alerts for this page. Make it unniform with other
    //                 page
    //               </li>
    //               <li>add a check box for keep me signed in</li>
    //               <li>Move the Eye button to next the password field</li>
    //               <li>
    //                 Make a onKeypress function that will trigger the handlelogin
    //                 function
    //               </li>
    //               <li>
    //                 make sure that every actions are being logged into the back
    //                 end
    //               </li>
    //             </h1>
    //           </ul>
    //         </div>

    //         <Alerts
    //           isOpen={showPopup}
    //           title="Log Out?"
    //           message="Are you sure you want to Log out?"
    //           onClose={handleClosePopup}
    //           onConfirm={handleConfirmAction}
    //         />
    //       </div>
   
    //   </div>
    // </div>
  );
};

export default Dashboard;
