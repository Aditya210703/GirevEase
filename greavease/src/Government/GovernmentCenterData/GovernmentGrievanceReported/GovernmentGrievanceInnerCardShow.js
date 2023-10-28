import React,{useState} from "react";
import { createPortal } from "react-dom";
import "./GovernmentGrievanceInnerCardShow.css"; // Create a CSS file for styling
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

const GovernmentGrievanceInnerCardShow = (props) => {
  const [selectedOption, setSelectedOption] = useState('Pending..');
  const handleClose = () => {
    props.closeBackdrop();
  } 
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      {createPortal(
        <div>
          <div
            className="GovernmentGrievanceInnerCardbackdrop"
          >
            
            <div className="GovernmentGrievanceInnerCardShow-card">
            <div className="close"><button className="close-btn" onClick={handleClose}><CloseSharpIcon /></button>
              </div>
              <div className="GovernmentGrievanceInnerCardShow-card-header">
                <img
                  src={props.imageUrl}
                  alt="GovernmentGrievanceInnerCard Card Header Image"
                />
              </div>
              <div className="GovernmentGrievanceInnerCardShow-content01">
                Description of Grievance:
              </div>
              <div className="GovernmentGrievanceInnerCardShow-content">
                {props.description}
              </div>
              <div>
                <label className="StatusLabel">Status:</label>
                <select className="valueselect" value={selectedOption} onChange={handleOptionChange}>
                  <option value="Pending..">Pending..</option>
                  <option value="In Process">In Process</option>
                  <option value="Solved">Solved</option>
                </select>
                <p className="selectedoptionvalue">Status Selected: {selectedOption}</p>
              </div>
            </div>
          </div>
        </div>,
        document.querySelector("#modal")
      )}
    </>
  );
};

export default GovernmentGrievanceInnerCardShow;
