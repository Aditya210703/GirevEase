import { useState } from "react";
import { createPortal } from "react-dom";
import "./GovernmentProcessShowCard.css"; // Create a CSS file for styling
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { database } from "../../../firebase";
import Leakage from './leakage.jpeg';
const GovernmentProcessShowCard = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.status);
  const handleClose = () => {
    props.closeBackdrop();
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit = async ()=>{
    const docRef = doc(database, "grievances", props.gid);
    const currentDate = new Date();
    const today = currentDate.toISOString().split('T')[0];
    if(selectedOption === 'solved'){
    const fieldToUpdate = {
      status: selectedOption,
      son: today,
    };
    try {
      await updateDoc(docRef, fieldToUpdate);
      alert("Grievance successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
    window.location.reload();
  }
  else{
    alert("Grievance successfully updated!");
  }
  }
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
                  src={Leakage}
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
                  <option value="In process">In process</option>
                  <option value="solved">Solved</option>
                </select>
                <p className="selectedoptionvalue">
                  Status Selected: {selectedOption}
                </p>
              <button onClick={handleSubmit} className="submit">Submit</button>
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
