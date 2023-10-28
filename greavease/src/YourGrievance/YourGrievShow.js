import { useState } from "react";
import Gdrop from "./YourGdrop";
import "../Grievances/Gdrop.css";

const YourGrievShow = (props) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <>
      {showCard && (
        <Gdrop
          imageUrl={props.DESIMG}
          description={props.Description}
          gid = {props.gid}
          Upvotes = {props.Upvotes}
          status = {props.status}
          closeBackdrop={() => {
            setShowCard(false);
          }}
        ></Gdrop>
      )}
      <button className="GrievShowButton" onClick={() => setShowCard(true)}>
        <div className="GrievShowDiv">
          <span className="GrievShowSpan1">
            <span className="inner_span">ID:</span>
            <span className="inner_span">{props.id}</span>
          </span>
          <span className="GrievShowSpan2">
            <span className="inner_span">Department:</span>
            <span className="inner_span">{props.Department}</span>
          </span>
          <span className="GrievShowSpan3">
            <span className="inner_span">Locality:</span>
            <span className="inner_span">{props.Locality}</span>
          </span>
          <span className="GrievShowSpan4">
            <span className="inner_span">Status:</span>
            <span className="inner_span">{props.status}</span>
          </span>
        </div>
      </button>
    </>
  );
};

export default YourGrievShow;
