import React from "react";
import style from "../../assets/style/marketProfile.module.css";

function WorkHours({ data }) {
  return (
    <div className={`${style.workHoursSection} container col-12`}>
      <div className={`${style.workHoursLeft} col-lg-3 col-md-6 col-sm-6`}>
        <i className="far fa-clock"></i>
        <div className={style.workHoursStatus}>open</div>
      </div>
      {data?.worktime?.map((item) => (
        <div
          className={`${style.workHoursRight} col-lg-9 col-md-6 col-sm-6`}
          key={item.day}
        >
          <p>{item.day}</p>
          <p>
            {item.from} - {item.to}
          </p>
        </div>
      ))}
      <div className={style.mapButton}>
        <button>Get Directions</button>
      </div>
    </div>
  );
}

export default WorkHours;
