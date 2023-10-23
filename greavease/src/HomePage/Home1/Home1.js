import React, { Fragment } from "react";
import './Home.css';
import Card1 from "../Left/Card1";
import Card2 from "../Left/Card2";
import Upper from "../Right/upper";
import Center from "../Center/Center";
import Lower from "../Right/Lower";

const Home=()=>{
return(
    
    <div className="main">
        
        <div className="left">
           
           <Card2></Card2>
           <Card1></Card1>
            
        </div>
        <div className="middle">
        <Center></Center>
        </div>
        <div className="right">
            <Upper></Upper>
            <Lower></Lower>
        </div>
    </div>
)
}

export default Home;