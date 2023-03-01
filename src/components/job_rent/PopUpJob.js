import React from "react";
import style from '../../assets/style/job_rent/card.module.css';

function PopUpRent({popJobInfo}){

return(
    <>
    <div className={`${style.popJobCard}`}>
        <div className={style.popJobMainImage}>
            <img src={popJobInfo.user_image} alt={popJobInfo.name}/>
        </div>
        <div className={style.popJobHeadInfo}>
            <h2>{popJobInfo.title}</h2>
            <p><i className="fas fa-map-marker-alt"></i> {popJobInfo.place}</p>
            <div className=" justify-content-center">
            <p><strong className={style.popJobStrong}>Company:</strong> {popJobInfo.company}</p>
            <p><strong className={style.popJobStrong}>Type of job:</strong> {popJobInfo.type}</p>
            </div>
            <div className=" justify-content-center">
            <p><strong className={style.popJobStrong}>How many hours?</strong></p>
            <p><strong className={style.popJobStrong}>Salary:</strong> {popJobInfo.salary}</p>
            </div>
            
        </div>

        <div className={style.popJobLongDisc}>
            <p>{popJobInfo.description}</p>
        </div>

        <div className={style.popJobContactSection}>
            <h3>Contact info:</h3>
            <p><i className="fas fa-envelope-open-text"></i> {popJobInfo.email}</p>
            <p><i className="fas fa-phone-alt"></i> {popJobInfo.phone}</p>
        </div>
    </div>
    </>
);
}

export default PopUpRent;