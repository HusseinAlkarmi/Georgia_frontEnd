import React from "react";
import Map from "./Map";
import SubCategoryCard from "./SubCategoryCard";
import style from "../../assets/style/SubCategory.module.css";
import Search from "./Search";
import SubCategorySlider from "./SubCategorySlider";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function SubCategoryBody(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const displayComponent = queryParams.get("Page") === "Shop";

  return (
    <div className={`container`}>
      <div className="row">
        <SubCategorySlider />
      </div>

      <div className={`${style.categoryBody} row`}>
        {displayComponent ? (
          <>
            <div className={`col-lg-4 col-md-12 col-sm-12 ${style.mapSection}`}>
              <Map />
            </div>
            <div className={`col-lg-8 col-md-12 col-sm-12`}>
              <SubCategoryCard location = {location} queryParams={queryParams} displayComponent = {displayComponent} />
            </div>
          </>
        ) : (
          <SubCategoryCard location = {location} queryParams={queryParams} displayComponent = {displayComponent}/>
        )}
      </div>
    </div>
  );
}
export default SubCategoryBody;
