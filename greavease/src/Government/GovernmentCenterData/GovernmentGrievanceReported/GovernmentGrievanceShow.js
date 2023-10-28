import React from "react";

import "./GovernmentGrievanceShow.css";
import GovernmentGrievanceReportData from "./GovernmentGrievanceReportData";
const GovernmentGrievanceShow = () => {
  return (
    <div className="GovernmentGrievanceShow_Card">
      <div className="GovernmentGrievanceShow_Card_Header">Grievances Reported</div>
      <GovernmentGrievanceReportData></GovernmentGrievanceReportData>
    </div>
  );
};

export default GovernmentGrievanceShow;
