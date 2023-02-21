import React from "react";
import LeftImage from "./LeftImage";
import RightInfo from "./RightInfo";
import style from './profile.module.css';


function profileInfo({setShowFavourite, setShowSave}){



    return(
        <>
        <div className={style.mainProfile}>
             <div className={`container pt-5`}>

                <div className="row justify-content-center">
                    <LeftImage setShowFavourite = {setShowFavourite} setShowSave = {setShowSave}/>
                    <RightInfo/>
                </div>

            </div>
        </div>
       
        </>
    );
}

export default profileInfo;