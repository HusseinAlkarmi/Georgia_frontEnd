import React from "react";
import Map from "./Map";
import SubCategoryCard from "./SubCategoryCard";
import style from "../../assets/style/SubCategory.module.css";
import Search from "./Search";
import SubCategorySlider from "./SubCategorySlider";


function SubCategoryBody(props) {
 
 
  return (
    <div className={`container`}>
      
      <div className="row">
        <SubCategorySlider/>
      </div>

      <div className={`${style.categoryBody} row`}>
        <div className={`col-lg-4 col-md-12 col-sm-12 ${style.mapSection}`}>
          <Map />
        </div>
        <div className={`col-lg-8 col-md-12 col-sm-12`}>
          <Search />
          <SubCategoryCard />
        </div>
      </div>
    </div>
  );
}
export default SubCategoryBody;
