import React from "react";
import './GovernmentLeftLowerCard101.css'
const GovernmentLeftLowerCard101=(props)=>{
    const SubmitHandler=()=>{
        console.log("hello");
    }
    return(
        <button onClick={SubmitHandler} className="GovernmentLeftLowerInnerCard">
         
         <div className="GovernmentLeftLowerInnerCardContent">
           <span ><img src={props.imgurl} alt="GovernmentLeftLowerInnerCardLogo2" className="GovernmentLeftLowerInnerCardLogo2"  /></span> 
            <span><p className="GovernmentLeftLowerInnerCardName2">{props.name}</p></span>
          </div>
        </button>
    )
}

export default GovernmentLeftLowerCard101;