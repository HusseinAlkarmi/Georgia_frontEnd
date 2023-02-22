import React from "react";
import { useState , useEffect } from "react";
import style from "./categoryList.module.css";
import TopList from './TopList';
import BottomList from './BottomList';
import { Link } from "react-router-dom";



function CategoryList(){
    const handleChangePage = () => {
        window.scrollTo(0, 0);
      }
    return(
        <>
        <div className={style.mainCategoryDiv}>
            <div className={`container ${style.container}`}>
            <h1 className={style.categoryTitle}>Category List</h1>
            <TopList/>
            <BottomList/>
            <Link to={`/Category/0`} className={style.navLink} onClick={handleChangePage}>
            <button className={style.seeAllBtn}>See All</button>
            </Link>
            </div>
            
        </div>
        </>
    );
}

export default CategoryList;