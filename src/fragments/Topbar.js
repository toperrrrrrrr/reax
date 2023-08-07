import React, { useState }  from "react";
import Clock from "../etc/Clock";

const Topbar = ({logout}) => {
  return (
    <div className="header">
      <div className="time">
        <span className="clock">
          <Clock />
        </span>
      </div>
      <div class="user-settings ">
     
          <img
            class="user-img"
            src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/301266446_3419967004994019_5330432090560501717_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFk9Lk0rTvRIrh2rmVE-Bs7AYr_cB8HkJ4Biv9wHweQnlh-H-jMzPf5T_z6wOU87_Zzuv52wWrExXl-oU4rhFsE&_nc_ohc=Qr3n1gnyQ5YAX_Rw4Zh&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfBVdHTvkYtHvUxjdd3zTafL-EYnZrNR3pjahJY4n2ZcYg&oe=64C51422"
            alt=""
          />

          <div className="dropdown">
          <div className="user-name">Nori</div>

          <svg viewBox="0 0 492 492" fill="currentColor" className="dropbtn">
            <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
          </svg>

          <div class="dropdown-content">
          <a class="sidebar-link" onClick={logout}>
            <svg viewBox="0 0 512 512" fill="currentColor">
              <path d="M255.2 468.6H63.8a21.3 21.3 0 01-21.3-21.2V64.6c0-11.7 9.6-21.2 21.3-21.2h191.4a21.2 21.2 0 100-42.5H63.8A63.9 63.9 0 000 64.6v382.8A63.9 63.9 0 0063.8 511H255a21.2 21.2 0 100-42.5z" />
              <path d="M505.7 240.9L376.4 113.3a21.3 21.3 0 10-29.9 30.3l92.4 91.1H191.4a21.2 21.2 0 100 42.6h247.5l-92.4 91.1a21.3 21.3 0 1029.9 30.3l129.3-127.6a21.3 21.3 0 000-30.2z" />{" "}
            </svg>
            Logout
          </a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          </div>
    

      </div>
    </div>
  );
};
export default Topbar;