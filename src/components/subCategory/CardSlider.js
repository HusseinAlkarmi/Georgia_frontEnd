import React, {useState, useEffect } from "react";
import style from "../../assets/style/subCategorySlider.module.css";
// import "../mainComponent/mainStyle.css";


function SliderList({id, name, handleClick, activeIndex}){


    return(
        <>
        {/* <li key="{key}">{props.text}</li> */}
        <li  className={`${activeIndex === id ? style.activeLi : ""}`} onClick={() => handleClick(id)}>
                <div >
                    <img className={style.subImg} src={require(`../../assets/Images/subCategory/${id}_icon.png`)}/>
                    <p className={style.subTitle}>{`${name}`}</p>
                </div>
        </li>
        </>
    );
}

export default SliderList;