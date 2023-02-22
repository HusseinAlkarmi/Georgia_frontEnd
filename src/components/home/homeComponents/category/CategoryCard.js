import React from "react";
import style from './categoryList.module.css';
import { Link } from 'react-router-dom';


function CategoryCard(props) {
  
  const handleChangePage = () => {
    window.scrollTo(0, 0);
  }

    return(
        <>
        <div key={props.id}>
          <Link to={`/Category/${props.id}`} className={style.navLink} onClick={handleChangePage}>
              <div className={style.cardBody}>
                <img className={style.listImg} src={`https://robohash.org/${props.id}?set=set2&size=150x150`} alt={`list ${props.name}`} />
                <h3 className={style.cardListTitle}>{props.name}</h3>
              </div>
            </Link>
        </div>
        </>
    );
}

export default CategoryCard;