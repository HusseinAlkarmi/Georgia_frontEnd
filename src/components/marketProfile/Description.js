import React from "react";
import style from '../../assets/style/marketProfile.module.css';
import Favorite_Contact from './Favorite_Contact';


function Description({data}) {
  return (
    <>
    <Favorite_Contact/>
    <div className={`${style.descriptionSection}`} >
       <h4>Description</h4>
        <p>{data?.description}</p>
    </div>
    </>
  );
}
export default Description;
