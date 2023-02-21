import React from "react";
import Map from './Map';
import SubCategoryCards from "./SubCategoryCards";
import style from './SubCategory.module.css';
function SubCategoryBody(){
return(
    <div className= {style.subCategoryMainDiv}> 
       <h1 className={style.categoryTitle}>ALL</h1>
       <div className={style.categoryBody}>
         <Map/>
         <SubCategoryCards/>
       </div>
    </div>
)
}
export default SubCategoryBody;