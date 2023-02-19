import React from "react";
import style from './profile.module.css';


function LeftImage(){
    return(
        <>
        <div className="col-6 d-flex">
            <img className={style.profileImg} src={require("../images/profilePic.png")} alt="profile picture" height={200}/>
        </div>
        </>
    );
}

export default LeftImage;