import React from "react";
import "./Card2.css";
import Card201 from "./Card201";
import img1 from "./new1.png";
import img2 from "./inyourarea.jpg";
import img3 from "./solved.jpg";
const Card2 = () => {
  const data = [
    {
      text: "Register",
      imgurl: img1,
    },
    {
      text: "In your Area",
      imgurl: img2,
    },
    {
      text: "Solved",
      imgurl: img3,
    },
  ];
  return (
    <div className="card2">
      <div className="card2-content">
        <Card201 name={data[0].text} imgurl={data[0].imgurl}></Card201>
        <Card201 name={data[0].text} imgurl={data[0].imgurl}></Card201>
        <Card201 name={data[0].text} imgurl={data[0].imgurl}></Card201>
        <Card201 name={data[1].text} imgurl={data[1].imgurl}></Card201>
        <Card201 name={data[2].text} imgurl={data[2].imgurl}></Card201>
      </div>
    </div>
  );
};

export default Card2;
