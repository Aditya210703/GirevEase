import React from "react";
import "./Card2.css";
import { Link } from "react-router-dom";
import Card201 from "./Card201";
import img1 from "./new1.png";
import img4 from "./inyourarea.jpg";
import img5 from "./solved.jpg";
import img2 from "./left_bottom/Reported.png";
import img3 from "./Your.png";
const Card2 = () => {
  const data = [
    {
      text: "Register New",
      imgurl: img1,
    },
    {
      text: "Grievance Reported",
      imgurl: img2,
    },
    {
      text: "Your Grievance",
      imgurl: img3,
    },
    {
      text: "In your Area",
      imgurl: img4,
    },
    {
      text: "Solved",
      imgurl: img5,
    },
  ];
  return (
    <div className="card2">
      <div className="card2-content">
        <Link to="/home/GrievanceShow">
          <Card201 name={data[1].text} imgurl={data[1].imgurl}></Card201>
        </Link>

        <Link to="/home/Gform">
          <Card201 name={data[0].text} imgurl={data[0].imgurl}></Card201>
        </Link>
        <Link to={"/home/YourGrievance"}>
          <Card201 name={data[2].text} imgurl={data[2].imgurl}></Card201>
        </Link>
        <Link to={"/home/InYourArea"}>
        <Card201 name={data[3].text} imgurl={data[3].imgurl}></Card201>
        </Link>
        <Link to={"/home/solved"}><Card201 name={data[4].text} imgurl={data[4].imgurl}></Card201></Link>
        
      </div>
    </div>
  );
};

export default Card2;
