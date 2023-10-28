import { useState } from "react";
import { createPortal } from "react-dom";
import "./GovernmentProcessShowCard.css"; // Create a CSS file for styling
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const GovernmentProcessShowCard = (props) => {
  const [selectedOption, setSelectedOption] = useState("Pending..");
  const handleClose = () => {
    props.closeBackdrop();
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      {createPortal(
        <div>
          <div className="GovernmentProcessInnerCardbackdrop">
            <div className="GovernmentProcessShowCard-card">
              <div className="close">
                <button className="close-btn" onClick={handleClose}>
                  <CloseSharpIcon />
                </button>
              </div>
              <div className="GovernmentProcessShowCard-card-header">
                <img
                  src={props.imageUrl}
                  alt="GovernmentProcessInnerCard Card Header Image"
                />
              </div>
              <div className="GovernmentProcessShowCard-content01">
                Description of Grievance:
              </div>
              <div className="GovernmentProcessShowCard-content">
                {props.description}
              </div>
              <div className="solvedDepartment">
                <span className="OnDe">By:</span>
                <span className="OnDe">{props.by}</span>
              </div>
              <div className="solvedDepartment">
                <span className="OnDe">Department:</span>
                <span className="OnDe">{props.department}</span>
              </div>
              <div>
                <label className="StatusLabel">Status:</label>
                <select
                  className="valueselect"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  
                  <option value="In Process">In Process</option>
                  <option value="Solved">Solved</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <p className="selectedoptionvalue">
                  Status Selected: {selectedOption}
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.querySelector("#modal")
      )}
    </>
  );
};

export default GovernmentProcessShowCard;
