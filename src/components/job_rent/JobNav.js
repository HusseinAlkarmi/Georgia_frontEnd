import React, {useState, useEffect } from "react";
import style from '../../assets/style/job_rent/jobNav.module.css';
import ScrollContainer from 'react-indiana-drag-scroll'
import { Link } from "react-router-dom";

function SubCategorySlider({index, setIndex}){

    // let subCategoryListTest = [{id :0 , Name : "Coffee"},{id :1, Name : "Desert"},{id :2, Name :"Bakary"}];

    const [activeIndex, setActiveIndex] = useState(index);

    

    const handleClick = (index) => {
        setIndex(index);
        setActiveIndex(index);
      }

    return(
        <>

<div className={style.width_slider}> 
    <ScrollContainer className="scroll-container">
    <ul className={`${style.slider_ul}`}>
            <li className={`${activeIndex === "Job" ? `${style.active}` : ""}`} onClick={() => handleClick("Job")}>
            <Link to="/Jobs/Job" className={style.navLink}>
                <div className={style.nav_body}>
                    <img className={style.subImg} src={require('../../assets/Images/job_rent/jobs.png')}/>
                    <p className={style.subTitle}>Jobs</p>
                </div>
            </Link>
            </li>
         
            <li className={`${activeIndex === "Rent" ? `${style.active}` : ""}`}  onClick={() => handleClick("Rent")}>
            <Link to="/Jobs/Rent" className={style.navLink}>
                <div className={style.nav_body}>
                    <img className={style.subImg} src={require('../../assets/Images/job_rent/rentLogo.png')}/>
                    <p className={style.subTitle}>Rent</p>
                </div>
            </Link>
            </li>
       
        </ul>
      </ScrollContainer>
      </div>
        
        </>
    );
}

export default SubCategorySlider;