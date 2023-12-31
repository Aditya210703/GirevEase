import React from "react";
import './Lower.css'
import LowerIn from "./LowerIn";
import Rules from './right_bottom/rules.jpg'
import Process from './right_bottom/flow.jpg'
import Red from './right_bottom/red.jpg'
import About from './right_bottom/abt.jpg'
import {Link} from "react-router-dom";

const Lower = () => {
    const submitHandle = () => {
      console.log("hii");
    };

    const infodata = [
        {
          text: "Rules regarding Grievances",
          imgurl: Rules,
        },
        {
          text: "Process Flow",
          imgurl: Process,
        },
        {
            text: "About Us",
            imgurl: About,
          },
      ];
    return (
      <div className="info">
        <div>
          <button onClick={submitHandle} className="btn2">
            Informatics &rarr;
          </button>
          <Link to='/home/Rules'>
            <LowerIn name={infodata[0].text} imgurl={infodata[0].imgurl} ></LowerIn>
          </Link>
          <Link to= '/home/process'><LowerIn name={infodata[1].text} imgurl={infodata[1].imgurl} ></LowerIn>
          </Link>
          <Link to='/home/About'><LowerIn name={infodata[2].text} imgurl={infodata[2].imgurl} ></LowerIn></Link>
        </div>
       
      </div>
    );
  };
  
  export default Lower;
  