import React from "react";
import { useState , useEffect } from "react";
import style from "./categoryList.module.css";
import TopList from './TopList';
import BottomList from './BottomList';


function CategoryList(){

    return(
        <>
        <div className={style.mainCategoryDiv}>
            <div className={`container ${style.container}`}>
            <h1 className={style.categoryTitle}>Category List</h1>
            <TopList/>
            <BottomList/>
            <button className={style.seeAllBtn}>See All</button>
            </div>
            
        </div>
        </>
    );
}

export default CategoryList;