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
         <strong>1. Submit Your Complaint:</strong><br />
         Click on the "Grievance Form" to submit your complaint. Your concerns matter, and we are here to address them promptly.
         <br /><br />
        <strong>2. Check Reported Grievances:</strong><br />
        Explore "Grievances Reported" to stay updated on issues reported in your locality. Together, we can make a positive impact in our community.
        <br /><br />
        <strong>3. Update Profile:</strong><br />
        Click on DropDown icon in header to update your profile details.
        <br /><br />
        <strong>4. LogOut:</strong><br />
        Click on LogOut icon to log out.
        <br /><br />
        <strong>5. Rules and Regulation:</strong><br />
        Click on "Rules regarding grievances" to go through our rules and regulations.
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