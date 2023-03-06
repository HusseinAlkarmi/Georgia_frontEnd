import React from "react";
import Map from "../subCategory/Map";
import WorkHours from "./WorkHours";
import style from '../../assets/style/marketProfile.module.css';

function MarketingMap({data}) {
console.log(data);
  return (
    <>
    <div className={style.MarketingMapContainer}>
      <Map />
      <WorkHours data={data} />
    </div>
    </>
  );
}
export default MarketingMap;
