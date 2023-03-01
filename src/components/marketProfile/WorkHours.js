import React from "react";
import style from '../../assets/style/marketProfile.module.css';
function WorkHours() {
  return (
    <div className={`${style.workHoursSection} container col-12`}>
      <div className={`${style.workHoursLeft} col-lg-3 col-md-6 col-sm-6`}>
      <i className="far fa-clock"></i>
       <div className={style.workHoursStatus}>open</div>
    </div>
     <div className={`${style.workHoursRight} col-lg-9 col-md-6 col-sm-6`}>
        <p>Monday to Friday 8am - 10:30pm</p>
        <p>Saturday</p>
        <div className={style.mapButton}>
          <button>Get Directions</button>
        </div>
     </div>
  </div>
  );
}
export default WorkHours;