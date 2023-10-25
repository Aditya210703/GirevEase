import React from "react";
import "./Center.css";
import {useLocation} from "react-router-dom";
import CardComponent from "../../Gform/Gcard";
import ShowGriev from "../../Grievances/Showdata";
const Center = () => {
  const location = useLocation();

  
  const renderContent = () => {
    if (location.pathname === "/home") {
      return (
          <div className="cnte">
        <h1>Welcome to GrievEase!</h1>
        <p className="siteInfo">GrievEase is your platform to voice concerns and find solutions. Here's a quick guide to get started:
        <br /><br />
         1. Submit Your Complaint:<br />
         Click on the "Grievance Form" to submit your complaint. Your concerns matter, and we are here to address them promptly.
         <br /><br />
        2. Check Reported Grievances:<br />
        Explore "Grievances Reported" to stay updated on issues reported in your locality. Together, we can make a positive impact in our community.
        <br /><br />
        3. Update Profile:<br />
        Click on DropDown icon in header to update your profile details.
        <br /><br />
        4. LogOut:<br />
        CLick on LogOut icon to log out.
        <br /><br />
        Thank you for joining GrievEase. Your contributions help build a better, more responsive community!
      </p>
        </div>
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