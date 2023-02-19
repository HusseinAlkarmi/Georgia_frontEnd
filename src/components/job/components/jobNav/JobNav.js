import React, {useState, useEffect } from "react";
import style from "./jobNav.module.css";
import ScrollContainer from 'react-indiana-drag-scroll'

function SubCategorySlider(){

    // let subCategoryListTest = [{id :0 , Name : "Coffee"},{id :1, Name : "Desert"},{id :2, Name :"Bakary"}];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
      }

    return(
        <>

<div className={style.width_slider}> 
    <ScrollContainer className="scroll-container">
    <ul className={`${style.slider_ul}`}>
            <li className={`${activeIndex === 0 ? "active" : ""}`} onClick={() => handleClick(0)}>
                <div className={style.nav_body}>
                    <img className={style.subImg} src={require('../../images/jobs.png')}/>
                    <p className={style.subTitle}>Jobs</p>
                </div>
            </li>
         
            <li className={`${activeIndex === 1 ? "active" : ""}`}  onClick={() => handleClick(1)}>
                <div className={style.nav_body}>
                    <img className={style.subImg} src={require('../../images/accomodation.png')}/>
                    <p className={style.subTitle}>Rent</p>
                </div>
            </li>
       
        </ul>
      </ScrollContainer>
      </div>
        
        </>
    );
}

export default SubCategorySlider;