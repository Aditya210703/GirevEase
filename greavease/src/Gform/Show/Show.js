import React from "react";

import "./Show.css";
import ReportData from "./Report_Data";
const Show = () => {
  return (
    <div className="Show_Card">
      <div className="Show_Card_Header">Grievances Reported</div>
      <ReportData></ReportData>
    </div>
  );
};

export default Show;
