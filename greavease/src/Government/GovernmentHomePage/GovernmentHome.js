import React from "react";
import './GovernmentHome.css'
import GovernmentLeftUpperCard1 from "../GovernmentLeft/GovernmentLeftUpper/GovernmentLeftUpperCard1";
import GovernmentLeftLowerCard1 from "../GovernmentLeft/GovernmentLeftLower/GovernmentLeftLowerCard1";
import GovernmentRightLower from "../GovernmentRight/GovernmentRightLower";
import GovernmentRightUpper from "../GovernmentRight/GovernmentRightUpper";
import GovernmentCenter from "../GovernmentCenter/GovernmentCenter";
import Header from "../../HomePage/home/header";
import { Outlet } from "react-router-dom";
const GovernmentHome=()=>{
    return(
        <div>
            <Header></Header>
            <div className="GovernmentHomeMain">
            <div className="GovernmentHomeLeft">
                <GovernmentLeftUpperCard1></GovernmentLeftUpperCard1>
                <GovernmentLeftLowerCard1></GovernmentLeftLowerCard1>
            </div>
            <div className="GovernmentHomeMiddle">
                <GovernmentCenter></GovernmentCenter>
                <Outlet></Outlet>
            </div>
            <div className="GovernmentHomeRight">
                <GovernmentRightUpper></GovernmentRightUpper>
                <GovernmentRightLower></GovernmentRightLower>
            </div>
        </div>
        </div>
        
    )
    
}

export default GovernmentHome;