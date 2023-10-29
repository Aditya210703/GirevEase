import React from "react";

import "./Water.css";
import WaterReportData from "./WaterReport";
const Water = () => {
  return (
    <div className="WaterShow_Card">
      <div className="WaterShow_Card_Header">Grievances Related To Water</div>
      <WaterReportData></WaterReportData>
    </div>
  );
};

export default Water;