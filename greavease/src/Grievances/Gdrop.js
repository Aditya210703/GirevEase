import React, {useState} from "react";
import { createPortal } from "react-dom";
import "./Gdrop.css"; // Create a CSS file for styling
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
const Gdrop = (props) => {
    const [count, setCount]=useState(0);
     
  const upvote = () =>{
    setCount(count+1)
    console.log(count);
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
                <img src={props.imageUrl} alt="Card Header Image" className="GrievanceImage"/>
              </div>
              <div className="gdrop-content01">Description of Grievance:</div>
              <div className="gdrop-content">{props.description}</div>
              <div className="gdrop-option">
                <button className="upvote" onClick={upvote}><ThumbUpOffAltOutlinedIcon /></button>
                <span>{count}</span>
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
