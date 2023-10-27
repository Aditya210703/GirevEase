import { useState } from "react";
import Gdrop from "./Gdrop";
import "./Gshow.css";

const GrievShow = (props) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <>
      {showCard && (
        <Gdrop
          imageUrl={props.DESIMG}
          description={props.Description}
          gid = {props.gid}
          Upvotes = {props.Upvotes}
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
            <span className="inner_span">By:</span>
            <span className="inner_span">{props.By}</span>
          </span>
        </div>
      </button>
    </>
  );
};

export default GrievShow;
