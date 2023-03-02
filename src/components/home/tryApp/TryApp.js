import React from "react";
import LeftTryApp from "./LeftTryApp";
import RightTryApp from "./RightTryApp";
import style from "../../../assets/style/homePage/tryApp.module.css";


function TryApp(){
    return(
        <>
        <div className={style.mainGetApp}>
        <div className="container">
            <div className="row justify-content-center">
                <div className={`col-sm-12 col-md-6 col-lg-6 ${style.leftDiv}`}>
                    <LeftTryApp/>
                </div>

                <div className={`col-sm-12 col-md-6 col-lg-6 ${style.rightDiv}`}>
                    <RightTryApp/>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default TryApp;