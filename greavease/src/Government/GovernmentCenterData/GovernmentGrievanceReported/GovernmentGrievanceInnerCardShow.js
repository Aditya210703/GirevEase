import React,{useState} from "react";
import { createPortal } from "react-dom";
import "./GovernmentGrievanceInnerCardShow.css"; // Create a CSS file for styling
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import {doc, updateDoc } from "firebase/firestore";
import { database } from "../../../firebase";

const GovernmentGrievanceInnerCardShow = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.status);
  const handleClose = () => {
    props.closeBackdrop();
  } 
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit = async ()=>{
    const docRef = doc(database, "grievances", props.gid);
    if(selectedOption === 'In process'){
    const fieldToUpdate = {
      status: selectedOption,
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
                  <option value="pending">Pending..</option>
                  <option value="In process">In Process</option>
                </select>
                <p className="selectedoptionvalue">Status Selected: {selectedOption}</p>
                <button onClick={handleSubmit}>Submit</button>
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
