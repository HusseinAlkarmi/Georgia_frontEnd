import React from "react";
import style from "./tryApp.module.css";


function RightTryApp(){
    return(
        <>
        <div className={style.rightMainDiv}>
            <h2 className={style.rightTitle}>Try the App</h2>

            <h4 className={style.rightDic}>Experience the best we offer, all in one app.</h4>

            <div className={style.btnRow}>
                <button type="button" className={`btn ${style.appBtn}`} onClick={() => window.open("https")}>
                    <img src={require("../../images/appStore.png")}/>
                </button>

                <button type="button" className={`btn ${style.appBtn}`} onClick={() => window.open("https://www.youtube.com/")}>
                    <img src={require("../../images/googlePlay.png")}/>
                </button>
            </div>
        </div>
        </>
    );
}

export default RightTryApp;