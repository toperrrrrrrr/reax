import React from 'react'
import "../../Alerts.css"

const Alerts = ({ isOpen, title, message, onClose, onConfirm, isHidden }) => {
    if (!isOpen) {
      return null;
    }
    return (
        <>
        <div className="confirmation-overlay" onClick={onClose}>
            <div className="confirmation-box">
            <h2 className='alerts-title'>{title}</h2>
            <p className='alerts-message'>{message}</p>
            <div className="confirmation-buttons">
                <button onClick={onConfirm} className="alert-btn" >Confirm</button>
                <button onClick={onClose} className="alert-btn" hidden={isHidden}>Cancel</button>
            </div>
            </div>
        </div>
         </>
    );
  };
  
  export default Alerts;