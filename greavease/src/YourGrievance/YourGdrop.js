import React from "react";
import { createPortal } from "react-dom";
import "../Grievances/Gdrop.css";
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { database } from "../firebase";
import { updateDoc,doc } from "firebase/firestore";
const Gdrop = (props) => {
  const handleClose = () => {
    props.closeBackdrop();
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
                <img src={props.imageUrl} alt="Card Header Image" className="GrievanceImage"/>
              </div>
              <div className="gdrop-content01">Description of Grievance:</div>
              <div className="gdrop-content">{props.description}</div>
              <div className="gdrop-content01">Status: <span>{props.status}</span></div>
              <div className="gdrop-option">
              <div className="gdrop-content01">Upvotes<span>{props.Upvotes}</span></div>
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
