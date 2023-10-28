import React from "react";

import "./GovernmentProcess.css";
import GovernmentProcessReportData from "./GovernmentProcessReport";
const GovernmentProcess = () => {
  return (
    <div className="GovernmentProcessShow_Card">
      <div className="GovernmentProcessShow_Card_Header">Grievances In Process</div>
      <GovernmentProcessReportData></GovernmentProcessReportData>
    </div>
  );
};

export default GovernmentProcess;