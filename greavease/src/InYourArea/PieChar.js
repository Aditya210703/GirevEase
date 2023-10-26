import React from "react";
import PieChartData from "./PieChartData";
import "./PieChartData.css";
function PieChart() {
  return (
    <div className="PieChartLocality">
      <header className="LocalityHeading">
        <h1 className="LocatlityHeadingIn">In Your Locality</h1>
      </header>
      <PieChartData />
    </div>
  );
}

export default PieChart;
