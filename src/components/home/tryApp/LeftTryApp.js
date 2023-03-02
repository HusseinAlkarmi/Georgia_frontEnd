import React from "react";
import style from "../../../assets/style/homePage/tryApp.module.css";


function LeftTryApp(){
    return(
        <>
        <img className={style.leftImg} src={require("../../../assets/Images/home/getApp.png")} height={350} alt="app image"/>
        </>
    );
}

export default LeftTryApp;