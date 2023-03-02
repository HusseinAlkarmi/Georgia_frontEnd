import React from "react";
import style from '../../assets/style/reachout.module.css';
function LeftReachout() {
  return (
    <>
      <div className={`col-sm-12 col-md-7 col-lg-7 ${style.leftReachout}`}>
        <img className={style.leftImage} src={require('../../assets/Images/reachout/reachout.png')} alt="Reachout"/>
      </div>
    </>
  );
}

export default LeftReachout;
