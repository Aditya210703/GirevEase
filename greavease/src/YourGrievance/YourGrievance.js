import React from "react";

import '../Grievances/ShowData.css';
import './YourGrievance.css';
import YourReport from "./YourReport";
const YourGrievance = () => {
  return (
    <div className="ShowYourGrievance">
      <div className="ShowYourGrievanceHeader">Your Grievances</div>
      <YourReport></YourReport>
    </div>
  );
};

export default YourGrievance;
