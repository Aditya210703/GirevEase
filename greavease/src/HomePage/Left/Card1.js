import React from "react";
import "./Card1.css";
import Card101 from "./card101";
import water from "./left_bottom/water.png";
import elec from "./left_bottom/elecic.png";
import road from "./left_bottom/road.png";
import law from "./left_bottom/law.png";
import jury from "./left_bottom/jury.png";
import mis from "./left_bottom/mis.png";
const Card1 = () => {
  const infodata = [
    {
      text: "Water",
      imgurl: water,
    },
    {
      text: "Electricity",
      imgurl: elec,
    },
    {
      text: "Roadways",
      imgurl: road,
    },
    {
      text: "Law Enforcement",
      imgurl: law,
    },
    {
      text: "Waste",
      imgurl: jury,
    },
    {
      text: "Miscellaneous",
      imgurl: mis,
    },
  ];
  return (
    <div className="card">
      <div className="card-header">Departments</div>
      <div className="card-content">
        <Card101 name={infodata[0].text} icon={infodata[0].imgurl}></Card101>
        <Card101 name={infodata[1].text} icon={infodata[1].imgurl}></Card101>
        <Card101 name={infodata[2].text} icon={infodata[2].imgurl}></Card101>
        <Card101 name={infodata[3].text} icon={infodata[3].imgurl}></Card101>
        <Card101 name={infodata[4].text} icon={infodata[4].imgurl}></Card101>
        <Card101 name={infodata[5].text} icon={infodata[5].imgurl}></Card101>
      </div>
    </div>
  );
};

export default Card1;
