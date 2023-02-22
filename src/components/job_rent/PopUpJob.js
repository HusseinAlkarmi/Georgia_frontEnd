import React from "react";
import style from '../../assets/style/job_rent/card.module.css';

function PopUpRent({popJobInfo}){

return(
    <>
    <div className={`${style.popJobCard}`}>
        <div className={style.popJobMainImage}>
            <img src={require(`../../assets/Images/job_rent/black.png`)} alt={popJobInfo.name}/>
        </div>
        <div className={style.popJobHeadInfo}>
            <h2>{popJobInfo.name}</h2>
            <p><i className="fas fa-map-marker-alt"></i> Address</p>
            <p>Type of job</p>
            <p>How many hours?</p>
            <p>How much time?</p>
        </div>

        <div className={style.popJobLongDisc}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className={style.popJobContactSection}>
            <h3>Contact Us</h3>
            <p><i className="fas fa-envelope-open-text"></i> lorem@gmail.com</p>
            <p><i class="fas fa-phone-alt"></i> +962 777-777-888</p>
        </div>
    </div>
    </>
);
}

export default PopUpRent;