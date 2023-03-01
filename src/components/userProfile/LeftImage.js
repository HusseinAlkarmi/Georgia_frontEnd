import React from "react";
import style from '../../assets/style/userProfile.module.css';
import { useState } from "react";


function LeftImage({setShowFavourite, setShowSave, Data}){

    function handleSaveClick(){
        setShowFavourite(false);
        setShowSave(true);
    }

    function handleCancelClick(){
        setShowSave(false);
        setShowFavourite(true);
    }

    return(
        <>
        <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`col-sm-12 col-md-6 col-lg-6 d-flex ${style.leftDivImg}`}>
                <img className={style.profileImg} src={Data.photo} alt="profile picture" height={300}/>
            </div>

            <input type="file" className="form-control" placeholder="image" />


            <div className={`col-sm-12 col-md-6 col-lg-6 d-flex ${style.leftBtnSection}`}>
                <button className={style.favoriteBtn} onClick={handleSaveClick}>Favorite</button>
                <button className={style.savedBtn} onClick={handleCancelClick}>Saved</button>
            </div>
        </div>
        </>
    );
}

export default LeftImage;