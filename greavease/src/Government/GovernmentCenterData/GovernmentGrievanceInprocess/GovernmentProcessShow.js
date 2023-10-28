import { useState } from "react";
import './GovernmentProcessShow.css';
import GovernmentProcessShowCard from "./GovernmentProcessShowCard";
const GovernmentProcessShow = (props) => {
  const [gProcessshowCard, setgProcessShowCard] = useState(false);
  return (
    <>
      {gProcessshowCard && (
        <GovernmentProcessShowCard imageUrl={props.DESIMG}
        description={props.Description} department={props.Department} by={props.By} status = {props.status} gid = {props.gid}
        closeBackdrop={() => {
          setgProcessShowCard(false);
        }}></GovernmentProcessShowCard>
      )}
      <button className="GovernmentProcessShowButton" onClick={() => setgProcessShowCard(true)}>
        <div className="GovernmentProcessShowDiv">
          <span className="GovernmentProcessShowSpan1">
            <span className="GovernmentProcess_span">ID:</span>
            <span className="GovernmentProcess_span">{props.id}</span>
          </span>
          <span className="GovernmentProcessShowSpan2">
            <span className="GovernmentProcess_span">Department:</span>
            <span className="GovernmentProcess_span">{props.Department}</span>
          </span>
          <span className="GovernmentProcessShowSpan3">
            <span className="GovernmentProcess_span">Locality:</span>
            <span className="GovernmentProcess_span">{props.Locality}</span>
          </span>
          <span className="GovernmentProcessShowSpan4">
            <span className="GovernmentProcess_span">Upvotes:</span>
            <span className="GovernmentProcess_span">{props.Upvotes}</span>
          </span>
        </div>
      </button>
    </>
  );
};

export default GovernmentProcessShow;
