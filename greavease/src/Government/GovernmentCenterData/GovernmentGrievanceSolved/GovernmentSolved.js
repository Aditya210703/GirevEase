import React from "react";

import "./GovernmentSolved.css";
import GovernmentSolvedReportData from "./GovernmentSolvedReport";
const GovernmentSolved = () => {
  return (
    <div className="GovernmentSolvedShow_Card">
      <div className="GovernmentSolvedShow_Card_Header">Grievances Solved</div>
      <GovernmentSolvedReportData></GovernmentSolvedReportData>
    </div>
  );
};

export default GovernmentSolved;