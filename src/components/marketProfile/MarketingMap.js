import React from "react";
import Map from "../subCategory/Map";
import WorkHours from "./WorkHours";
import style from '../../assets/style/marketProfile.module.css';


function MarketingMap() {
  return (
    <>
    <div className={style.MarketingMapContainer}>
      <Map />
      <WorkHours />
    </div>
    </>
  );
}
export default MarketingMap;
