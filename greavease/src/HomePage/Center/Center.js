import React from "react";
import "./Center.css";
import CardComponent from "../../Gform/Gcard";
import ShowGriev from "../../Grievances/Showdata";
const Center = () => {
  
  return (
    <div>
        <div className="cnte">
      
      {/* <CardComponent></CardComponent> */}
      <ShowGriev></ShowGriev>
    </div>
    
    </div>
    
  );
};

export default Center;