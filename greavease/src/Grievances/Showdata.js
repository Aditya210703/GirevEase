import React from "react";

import "./ShowData.css";
import ReportData from "./ReportData";
const ShowGriev = () => {
  return (
    <div className="Show_Griev">
      <div className="Show_Griev_Header">Grievances Reported</div>
      <ReportData></ReportData>
    </div>
  );
};

export default ShowGriev;
