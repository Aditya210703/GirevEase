import React from "react";
import './GovernmentRightLowerIn.css'
const GovernmentRightLowerIn=(props)=>{
 
    const SubmitHandler=()=>{
        console.log("hello");
    }
    return(
        <button onClick={SubmitHandler}className="GovernmentRightLowerIninnerinfo">
         
         <div className="GovernmentRightLowerInInnerInfoContent">
           <span ><img src={props.imgurl} alt="Logo" className="GovernmentRightLowerInIcon"  /></span> 
            <span><p className="GovernmentRightLowerInItem">{props.name}</p></span>
            <span className="GovernmentRightLowerInArrow"><p>&rarr;</p></span>
          </div>
        </button>
    )
}

export default GovernmentRightLowerIn;