import React from "react";
import style from './SubCategory.module.css';
function SubCategoryCard(props){
return(

    <div className={style.card}>
           <img src={require(`./Images/category_img.png`)}/>
            <p>{props.name}</p>
    </div>

)
}
export default SubCategoryCard;