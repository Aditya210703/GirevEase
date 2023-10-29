import React from "react";

import "./LocalitySolved.css";
import LocalitySolvedReportData from "./LocalitySolvedReport";
const LocalitySolved = () => {
  return (
    <div className="LocalitySolvedShow_Card">
      <div className="LocalitySolvedShow_Card_Header">Grievances Solved</div>
      <LocalitySolvedReportData></LocalitySolvedReportData>
    </div>
  );
};

export default LocalitySolved;