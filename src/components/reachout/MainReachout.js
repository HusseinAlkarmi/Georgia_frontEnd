import React from "react";
import style from '../../assets/style/reachout.module.css';
import LeftReachout from "./LeftReachout";
import RightReachout from "./RightReachout";

function MainReachout(){
    return(
        <>
        <div className={style.mainReachoutDiv}>
            <div className="container">
                <div className="row">
                   <LeftReachout/>
                   <RightReachout/>

                    <div className="col-6">

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MainReachout;