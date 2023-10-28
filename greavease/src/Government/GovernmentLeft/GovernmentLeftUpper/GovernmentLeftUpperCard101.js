import React from "react";
import './GovernmentLeftUpperCard101.css';
const GovernmentLeftUpperCard101=(props)=>{
 
    const SubmitHandler=(props)=>{
        console.log("hello");
    }
    return(
        <button onClick={SubmitHandler}className="GovernmentLeftUpperInnerCard">
         
         <div className="GovernmentLeftUpperInnerCardcontent">
           <span ><img src={props.imgurl} alt="GovernmentLeftUpperInnerCardLogo" className="GovernmentLeftUpperInnerCardlogo"  /></span> 
            <span><p className="GovernmentLeftUpperInnerCardName">{props.name}</p></span>
          </div>
        </button>
    )
}

export default GovernmentLeftUpperCard101;