import { useState } from "react";
import { createPortal } from "react-dom";
import "./GovernmentProcessShowCard.css"; // Create a CSS file for styling
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { database } from "../../../firebase";
const GovernmentProcessShowCard = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.status);
  const [selectedImage, setSelectedImage] = useState(null); 
  const handleClose = () => {
    props.closeBackdrop();
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result;
        setSelectedImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  }; 
  const handleSubmit = async ()=>{
    const docRef = doc(database, "grievances", props.gid);
    const currentDate = new Date();
    const today = currentDate.toISOString().split('T')[0];
    if(selectedOption === 'solved'){
    const fieldToUpdate = {
      status: selectedOption,
      son: today,
      simg: selectedImage,
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
                  <option value="In process">In process</option>
                  <option value="solved">Solved</option>
                </select>
                <p className="selectedoptionvalue">
                  Status Selected: {selectedOption}
                </p>
                <div>
                  <label className="solved-img">Upload image of solved grievance: </label>
                <input
                type="file"
                onChange={handleImageChange}
              />
                <img alt="preview" src={selectedImage}/>
                </div>
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
