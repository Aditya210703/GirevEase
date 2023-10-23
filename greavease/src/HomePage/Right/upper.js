import React from "react";
import "./Upper.css";
const Upper = () => {
  const submitHandler = () => {
    console.log("hii");
  };
  return (
    <div className="feed">
      <div>
        <button onClick={submitHandler} className="btn">
          Meetups &rarr;
        </button>
      </div>
      <p className="para">this feature is coming soon.....</p>
      <p className="para1">on place for local community meetings info.....</p>
    </div>
  );
};

export default Upper;
