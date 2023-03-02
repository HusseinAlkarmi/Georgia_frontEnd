import React from "react";
import style from "./hero.module.css";


function Hero(){
    return(
        <>
        <img className={style.hero} src={require("../../../assets/Images/home/hero.png")}  alt="Hero"/>
        </>
    );
}

export default Hero;