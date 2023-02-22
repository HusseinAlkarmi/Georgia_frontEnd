import React from "react";
import CategoryHeader from "../components/subCategory/CategoryHeader";
import SubCategoryBody from '../components/subCategory/SubCategoryBody';
import DealsCard from '../components/subCategory/DealsCard';
import style from "../assets/style/SubCategory.module.css";

function SubCategory(){
return(
    <>
     <CategoryHeader/>
     <div className={`${style.subCategoryMainDiv} pt-4` }>
       <SubCategoryBody/>
     </div>
     <DealsCard/>
     </>
)
}
export default SubCategory;