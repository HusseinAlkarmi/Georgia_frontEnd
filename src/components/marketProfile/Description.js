import React from "react";
import style from '../../assets/style/marketProfile.module.css';
import Favorite_Contact from './Favorite_Contact';

function Description() {

  return (
    <>
    <Favorite_Contact/>
    <div className={`${style.descriptionSection}`} >
       <h4>Description</h4>
        <p>Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem</p>
    </div>
    </>
  );
}
export default Description;
