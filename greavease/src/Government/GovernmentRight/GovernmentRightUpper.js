import React from "react";
import "./GovernmentRightUpper.css";
const GovernmentRightUpper = () => {
  const submitHandler = () => {
    console.log("hii");
  };
  return (
    <div className="GovernmentRightUpperfeed">
      <div>
        <button onClick={submitHandler} className="GovernmentRightUpperbtn">
          Meetups &rarr;
        </button>
      </div>
      <p className="GovernmentRightUpperpara">This feature is coming soon.....</p>
      <p className="GovernmentRightUpperpara1">One place for local community meetings info.....</p>
    </div>
  );
};

export default GovernmentRightUpper;
