import { useState } from "react";
import './GovernmentSolvedShow.css';
import GovernmentSolvedInnerCardShow from "./GovernmentSolvedShowCard";
const GovernmentSolvedShow = (props) => {
  const [gSolvedshowCard, setgSolvedShowCard] = useState(false);
  return (
    <>
      {gSolvedshowCard && (
        console.log(props.son),
        <GovernmentSolvedInnerCardShow imageUrl={props.DESIMG}
        description={props.Description} son={props.son} department={props.Department}
        
        closeBackdrop={() => {
          setgSolvedShowCard(false);
        }}></GovernmentSolvedInnerCardShow>
      )}
      <button className="GovernmentSolvedShowButton" onClick={() => setgSolvedShowCard(true)}>
        <div className="GovernmentSolvedShowDiv">
          <span className="GovernmentSolvedShowSpan1">
            <span className="GovernmentSolved_span">ID:</span>
            <span className="GovernmentSolved_span">{props.id}</span>
          </span>
          <span className="GovernmentSolvedShowSpan2">
            <span className="GovernmentSolved_span">Department:</span>
            <span className="GovernmentSolved_span">{props.Department}</span>
          </span>
          <span className="GovernmentSolvedShowSpan3">
            <span className="GovernmentSolved_span">Locality:</span>
            <span className="GovernmentSolved_span">{props.Locality}</span>
          </span>
          <span className="GovernmentSolvedShowSpan4">
            <span className="GovernmentSolved_span">Solved On:</span>
            <span className="GovernmentSolved_span">{props.son}</span>
          </span>
        </div>
      </button>
    </>
  );
};

export default GovernmentSolvedShow;
