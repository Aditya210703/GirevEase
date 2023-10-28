import React from "react";
import './GovernmentRightLower.css'
import GovernmentRightLowerIn from "./GovernmentRightLowerIn";
import Right1 from '../GovernmentRight/GovernmentRightImage/rl.jpg'
import Right2 from '../GovernmentRight/GovernmentRightImage/red.jpg'
import Right3 from '../GovernmentRight/GovernmentRightImage/abt.jpg'
import {Link} from 'react-router-dom';
const GovernmentRightLower = () => {
    const submitHandle = () => {
      console.log("hii");
    };

    const GovernmentRightLowerinfodata = [
        {
          text: "rules regarding grievances",
          imgurl: Right1,
        },
        {
          text: "process flow",
          imgurl: Right2,
        },
        {
            text: "about us",
            imgurl: Right3,
          },
      ];
    return (
      <div className="GovernmentRightLowerinfodatainfo">
        <div>
          <button onClick={submitHandle} className="GovernmentRightLowerinfodatabtn2">
            informatics &rarr;
          </button>
          <Link to='/GovernmentHome/rules'>
          <GovernmentRightLowerIn name={GovernmentRightLowerinfodata[0].text} imgurl={GovernmentRightLowerinfodata[0].imgurl} ></GovernmentRightLowerIn>
          </Link>
          <Link to='/GovernmentHome/process'>
          <GovernmentRightLowerIn name={GovernmentRightLowerinfodata[1].text} imgurl={GovernmentRightLowerinfodata[1].imgurl} ></GovernmentRightLowerIn>
          </Link>
          <Link to='/GovernmentHome/about'>
          <GovernmentRightLowerIn name={GovernmentRightLowerinfodata[2].text} imgurl={GovernmentRightLowerinfodata[2].imgurl} ></GovernmentRightLowerIn>
          </Link>
        </div>
       
      </div>
    );
  };
  
  export default GovernmentRightLower;
  