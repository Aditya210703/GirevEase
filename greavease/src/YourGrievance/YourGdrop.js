import React from "react";
import { createPortal } from "react-dom";
import "../Grievances/Gdrop.css";
import { doc, deleteDoc} from "firebase/firestore";
import { database } from "../firebase";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
const Gdrop = (props) => {
  const handleClose = () => {
    props.closeBackdrop();
  }
  const handledelete = () => {
    const docRef = doc(database, "grievances", props.gid);
    deleteDoc(docRef)
      .then(() => {
        alert("Grievance successfully deleted.")
        window.location.reload();
      })
      .catch(error => {
        alert("Error deleting Grievance: ", error);
      });
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
                <img src={props.imageUrl} alt="Card-Header-Images" className="GrievanceImage" />
              </div>
              <div className="gdrop-content01">Description of Grievance:</div>
              <div className="gdrop-content">{props.description}</div>
              <div className="gdrop-content01">Status: <span>{props.status}</span></div>
              <div className="gdrop-option">
                <div className="gdrop-content01">Upvotes<span>{props.Upvotes}</span></div>
                <button className="help" onClick={handledelete}>Delete</button>
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
