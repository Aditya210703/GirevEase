import React, {useState} from "react";
import { createPortal } from "react-dom";
import "./Gdrop.css"; // Create a CSS file for styling
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { database } from "../firebase";
import { updateDoc,doc } from "firebase/firestore";
import Leakage from './leakage.jpeg';
const Gdrop = (props) => {
  const upvote = async () =>{
    const grievanceRef = doc(database, "grievances", props.gid);
    await updateDoc(grievanceRef, { Upvotes: (props.Upvotes)+1 });
    window.location.reload();
  }
  const handleClose = () => {
    props.closeBackdrop();
  } 
  const handleHelp=() => {
    console.log("help");
  }
  return (
    <>
      {createPortal(
        <div>
          <div className="backdrop">
            <div className="gdrop-card">
              <div className="close"><button className="close-btn" onClick={handleClose}><CloseSharpIcon /></button>
              </div>
              <div className="gdrop-card-header">
                <img src={Leakage} alt="Card Header Image" className="GrievanceImage"/>
              </div>
              <div className="gdrop-content01">Description of Grievance:</div>
              <div className="gdrop-content">{props.description}</div>
              <div className="gdrop-option">
              <div className="upvote-container"><button className="upvote" onClick={upvote}><ThumbUpOffAltOutlinedIcon /></button>
                <span>{props.Upvotes}</span>
                </div>
                <button className="help" onClick={handleHelp}>Help</button>
              </div>
            </div>
          </div>
        </div>,
        document.querySelector("#modal")
      )}
    </>
  );
};

export default Gdrop;
