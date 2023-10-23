import React from "react";
import './Lower.css'
import LowerIn from "./LowerIn";
import Rules from './right_bottom/rules.jpg'
import Process from './right_bottom/flow.jpg'
import Red from './right_bottom/red.jpg'
import About from './right_bottom/abt.jpg'

const Lower = () => {
    const submitHandle = () => {
      console.log("hii");
    };

    const infodata = [
        {
          text: "rules regarding grievances",
          imgurl: Rules,
        },
        {
          text: "process flow",
          imgurl: Process,
        },
        {
          text: "redressal process",
          imgurl: Red,
        },
        {
            text: "about us",
            imgurl: About,
          },
      ];
    return (
      <div className="info">
        <div>
          <button onClick={submitHandle} className="btn2">
            informatics &rarr;
          </button>
          <LowerIn name={infodata[0].text} imgurl={infodata[0].imgurl} ></LowerIn>
          <LowerIn name={infodata[1].text} imgurl={infodata[1].imgurl} ></LowerIn>
          <LowerIn name={infodata[2].text} imgurl={infodata[2].imgurl} ></LowerIn>
          <LowerIn name={infodata[3].text} imgurl={infodata[3].imgurl} ></LowerIn>
        </div>
       
      </div>
    );
  };
  
  export default Lower;
  