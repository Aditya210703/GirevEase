import React from "react";
import { createPortal } from "react-dom";
import "./GovernmentSolvedShowCard.css"; // Create a CSS file for styling
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import Leakage from './leakage.jpeg';
const GovernmentSolvedInnerCardShow = (props) => {
  const handleClose = () => {
    props.closeBackdrop();
  } 
 
  return (
    <>
      {createPortal(
        <div>
          <div
            className="GovernmentSolvedInnerCardbackdrop"
          >
            
            <div className="GovernmentSolvedInnerCardShow-card">
            <div className="close"><button className="close-btn" onClick={handleClose}><CloseSharpIcon /></button>
              </div>
              <div className="GovernmentSolvedInnerCardShow-card-header">
                <img
                  src={props.image.Url}
                  alt="GovernmentSolvedInnerCard Card Header Image"
                />
              </div>
              <div className="GovernmentSolvedInnerCardShow-content01">
                Description of Grievance:
              </div>
              <div className="GovernmentSolvedInnerCardShow-content">
                {props.description}
              </div>
              
                <div className="solvedDepartment">
                  <span className="OnDe">Solved On:</span>
                  <span className="OnDe">{props.son}</span>
                </div>
                <div className="solvedDepartment">
                  <span className="OnDe">Department:</span>
                  <span className="OnDe">{props.department}</span>
                </div>
              
            </div>
          </div>
        </div>,
        document.querySelector("#modal")
      )}
    </>
  );
};

export default GovernmentSolvedInnerCardShow;
