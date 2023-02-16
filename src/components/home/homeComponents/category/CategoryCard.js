import React from "react";
import style from './categoryList.module.css';


function CategoryCard(props) {

    return(
        <>
        <div key={props.id}>
          <div className={style.cardBody}>
            <img className={style.listImg} src={`https://robohash.org/${props.id}?set=set2&size=150x150`} alt={`list ${props.name}`} />
             <h3 className={style.cardListTitle}>{props.name}</h3>
          </div>
        </div>
        </>
    );
}

export default CategoryCard;