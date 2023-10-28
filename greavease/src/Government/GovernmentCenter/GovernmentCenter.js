import React from "react";
import './GovernmentCenter.css';
import {useLocation} from "react-router-dom";
import GovernmentGrievShow from "../GovernmentCenterData/GovernmentGrievanceReported/GovernmentGrievanceCardShow";
import GovernmentGrievanceShow from "../GovernmentCenterData/GovernmentGrievanceReported/GovernmentGrievanceShow";
import GovernmentSolved from "../GovernmentCenterData/GovernmentGrievanceSolved/GovernmentSolved";
import GovernmentProcess from "../GovernmentCenterData/GovernmentGrievanceInprocess/GovernmentProcess";
import GovernmentChart from "../GovernmentCenterData/GovernmentChart/CovernmentChart";
const GovernmentCenter = () => {
  const location = useLocation();

  
  const renderContent = () => {
    if (location.pathname === "/GovernmentHome") {
      return (
        <GovernmentChart />
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

export default GovernmentCenter;
