import React from "react";
import './GovernmentCenter.css';
import GovernmentGrievShow from "../GovernmentCenterData/GovernmentGrievanceReported/GovernmentGrievanceCardShow";
import GovernmentGrievanceShow from "../GovernmentCenterData/GovernmentGrievanceReported/GovernmentGrievanceShow";
import GovernmentSolved from "../GovernmentCenterData/GovernmentGrievanceSolved/GovernmentSolved";
import GovernmentProcess from "../GovernmentCenterData/GovernmentGrievanceInprocess/GovernmentProcess";
import GovernmentChart from "../GovernmentCenterData/GovernmentChart/CovernmentChart";
const GovernmentCenter = () => {
  return <div className="Gcnte">
    <GovernmentChart></GovernmentChart>
  </div>;
};

export default GovernmentCenter;
