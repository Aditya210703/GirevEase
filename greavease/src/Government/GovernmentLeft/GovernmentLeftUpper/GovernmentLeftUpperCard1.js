import React from "react";
import GovernmentLeftUpperCard101 from "./GovernmentLeftUpperCard101";
import './GovernmentLeftUpperCard1.css';
import Image1 from '../GovernmentLeftImages/water.png'
import Image2 from '../GovernmentLeftImages/elecic.png';
import Image3 from '../GovernmentLeftImages/road.png';
import Image4 from '../GovernmentLeftImages/law.png';
import Image5 from '../GovernmentLeftImages/Waste.png';
import Image6 from '../GovernmentLeftImages/mis.png';

const GovernmentLeftUpperCard1 = () => {
    
    
    const GovernmentLeftUpperCardData = [
      {
        text: "WaterWorks",
        imgurl: Image1,
      },
      {
        text: "Electricity",
        imgurl: Image2,
      },
      {
        text: "Roadways",
        imgurl: Image3,
      },
      {
        text: "Law",
        imgurl: Image4,
      },
      {
        text: "Waste",
        imgurl: Image5,
      },
      {
        text: "Miscellaneous",
        imgurl:Image6,
      },
    ];
  return (
    <div className="GovernmentLeftUpperCard">
      <div className="GovernmentLeftUpperCardheader">Departments</div>
      <div className="GovernmentLeftUpperCardcontent">
        <GovernmentLeftUpperCard101 name={GovernmentLeftUpperCardData[0].text} imgurl={GovernmentLeftUpperCardData[0].imgurl}></GovernmentLeftUpperCard101>
        <GovernmentLeftUpperCard101 name={GovernmentLeftUpperCardData[1].text} imgurl={GovernmentLeftUpperCardData[1].imgurl}></GovernmentLeftUpperCard101>
        <GovernmentLeftUpperCard101 name={GovernmentLeftUpperCardData[2].text} imgurl={GovernmentLeftUpperCardData[2].imgurl}></GovernmentLeftUpperCard101>
        <GovernmentLeftUpperCard101 name={GovernmentLeftUpperCardData[3].text} imgurl={GovernmentLeftUpperCardData[3].imgurl}></GovernmentLeftUpperCard101>
        <GovernmentLeftUpperCard101 name={GovernmentLeftUpperCardData[4].text} imgurl={GovernmentLeftUpperCardData[4].imgurl}></GovernmentLeftUpperCard101>
        <GovernmentLeftUpperCard101 name={GovernmentLeftUpperCardData[5].text} imgurl={GovernmentLeftUpperCardData[5].imgurl}></GovernmentLeftUpperCard101>
      </div>
    </div>
  );
};

export default GovernmentLeftUpperCard1;