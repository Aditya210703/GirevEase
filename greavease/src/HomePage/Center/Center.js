import React from "react";
import "./Center.css";
import {useLocation} from "react-router-dom";
import CardComponent from "../../Gform/Gcard";
import ShowGriev from "../../Grievances/Showdata";
import PieChar from "../../InYourArea/PieChar"
import PieChart from "../../InYourArea/PieChar";
import TotalGrievance from "../../TotalGrievancePieChart/TotalGrievances";
const Center = () => {
  const location = useLocation();

  
  const renderContent = () => {
    if (location.pathname === "/home") {
      return (
        <TotalGrievance />
      );
    }
  };

  return (
    <div>
       
      {renderContent()}
      {/* <CardComponent></CardComponent> */}
      {/* <ShowGriev></ShowGriev> */}
    </div>    
  );
};

export default Center;