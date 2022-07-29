import React from "react";
const Popup = props => {
  return (
    <div className="profile-popup-box">
      <div className="profile-box">
        <span className="porfile-close-icon" onClick={props.handleClose}><h1>x</h1></span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;