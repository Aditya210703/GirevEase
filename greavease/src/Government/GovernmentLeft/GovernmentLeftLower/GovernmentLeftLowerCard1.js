import React from "react";
import { Link } from "react-router-dom";
import Image1 from '../GovernmentLeftImages/Reported.png'
import Image2 from '../GovernmentLeftImages/inprocess.webp';
import Image3 from '../GovernmentLeftImages/solved.jpg';
import './GovernmentLeftLowerCard1.css';
import GovernmentLeftLowerCard101 from "./GovernmentLeftLowerCard101";
const GovernmentLeftLowerCard1=()=>{
    const GovernmentLeftLowerCardData = [
        {
          text: "Grievances Reported",
          imgurl:Image1,
        },
        {
          text: "In Process",
          imgurl: Image2,
        },
        {
          text: "Solved",
          imgurl: Image3,
        },
        {
          text: "Graphical View",
          imgurl: Image3,
        },
      ];
      return (
        <div className="GovernmentLeftLowerCard">
          <div className="GovernmentLeftLowerCardContent">
            <Link  to={"/GovernmentHome/Reported"}>
            <GovernmentLeftLowerCard101 name={GovernmentLeftLowerCardData[0].text} imgurl={GovernmentLeftLowerCardData[0].imgurl}></GovernmentLeftLowerCard101>
            </Link>
            <Link to="/GovernmentHome/Inprocess">
            <GovernmentLeftLowerCard101 name={GovernmentLeftLowerCardData[1].text} imgurl={GovernmentLeftLowerCardData[1].imgurl}></GovernmentLeftLowerCard101>
            </Link>
            <Link to="/GovernmentHome/Solved">
            <GovernmentLeftLowerCard101 name={GovernmentLeftLowerCardData[2].text} imgurl={GovernmentLeftLowerCardData[2].imgurl}></GovernmentLeftLowerCard101>
            </Link>
            <Link to="/GovernmentHome/Graphical"> 
            <GovernmentLeftLowerCard101 name={GovernmentLeftLowerCardData[3].text} imgurl={GovernmentLeftLowerCardData[0].imgurl}></GovernmentLeftLowerCard101>
            </Link>
          </div>
        </div>
      );
}

export default GovernmentLeftLowerCard1;