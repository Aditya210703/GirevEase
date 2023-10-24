import React from "react";
import { createPortal } from "react-dom";
import "./Gdrop.css"; // Create a CSS file for styling

const Gdrop = (props) => {
  return (
    <>
      {createPortal(
        <div>
          <div className="backdrop" onClick={props.closeBackdrop}>
            <div className="gdrop-card">
              <div className="gdrop-card-header">
                <img src={props.imageUrl} alt="Card Header Image" className="GrievanceImage"/>
              </div>
              <div className="gdrop-content01">Description of Grievance:</div>
              <div className="gdrop-content">{props.description}</div>
            </div>
          </div>
        </div>,
        document.querySelector("#modal")
      )}
    </>
  );
};

export default Gdrop;
