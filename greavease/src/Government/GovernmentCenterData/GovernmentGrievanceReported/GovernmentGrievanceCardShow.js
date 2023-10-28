import { useState } from "react";
import './GovernmentGrievanceCardShow.css';
import GovernmentGrievanceInnerCardShow from "./GovernmentGrievanceInnerCardShow";
const GovernmentGrievShow = (props) => {
  const [govshowCard, setgovShowCard] = useState(false);
  return (
    <>
      {govshowCard && (
        <GovernmentGrievanceInnerCardShow
          imageUrl={props.DESIMG}
          description={props.Description}
          
          closeBackdrop={() => {
            setgovShowCard(false);
          }}
        ></GovernmentGrievanceInnerCardShow>
      )}
      <button className="GovernmentGrievShowButton" onClick={() => setgovShowCard(true)}>
        <div className="GovernmentGrievShowDiv">
          <span className="GovernmentGrievShowSpan1">
            <span className="Governmentinner_span">ID:</span>
            <span className="Governmentinner_span">{props.id}</span>
          </span>
          <span className="GovernmentGrievShowSpan2">
            <span className="Governmentinner_span">Department:</span>
            <span className="Governmentinner_span">{props.Department}</span>
          </span>
          <span className="GovernmentGrievShowSpan3">
            <span className="Governmentinner_span">Locality:</span>
            <span className="Governmentinner_span">{props.Locality}</span>
          </span>
          <span className="GovernmentGrievShowSpan4">
            <span className="Governmentinner_span">Status:</span>
            <span className="Governmentinner_span">{props.By}</span>
          </span>
        </div>
      </button>
    </>
  );
};

export default GovernmentGrievShow;
