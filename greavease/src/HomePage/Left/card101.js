import React from "react";
import logoimg from './icon.png'
import './Card101.css'
const Card101=(props)=>{
 
    const SubmitHandler=()=>{
    }
    return(
        <button onClick={SubmitHandler}className="inner-card">
         
         <div className="inner-card-content">
           <span ><img src={props.icon} alt="Logo" className="logo"  /></span> 
            <span><p1 className="name">{props.name}</p1></span>
          </div>
        </button>
    )
}

export default Card101;