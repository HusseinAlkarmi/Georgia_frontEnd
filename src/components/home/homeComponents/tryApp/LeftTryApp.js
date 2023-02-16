import React from "react";
import style from "./tryApp.module.css";


function LeftTryApp(){
    return(
        <>
        <img className={style.leftImg} src={require("../../images/getApp.png")} height={350} alt="app image"/>
        </>
    );
}

export default LeftTryApp;