import React from "react";
import style from "../../assets/style/job_rent/card.module.css";


// function Card({id, title, name, setPopJobInfo, popJobInfo, setShowModal, setJobPopUp}){
function Card({id, company, created_at, description, email, phone, place, salary, type, title, user_image, user_name, setShowModal, setJobPopUp, popJobInfo, setPopJobInfo}){

    function handleJobCardClick(){
        document.body.style.overflow = 'hidden';
        setPopJobInfo({...popJobInfo, id: id, name: user_name, place:place, email:email, phone:phone, salary:salary, type:type, title:title, description:description, user_image:user_image, company:company});
        setJobPopUp(true);
        setShowModal(true);
    }

    return(
        <>
        <div  className={`col-sm-12 col-md-6 col-lg-4`}>
            <div className={`${style.card_body}`} onClick={handleJobCardClick}>
            
            <div className={`row`}>
                <div className={`col-12 d-flex ${style.icon_row}`}>
                    <i className="fas fa-arrow-up"></i>
                    <i className="fas fa-bookmark"></i>
                 </div>
            </div>

            <div className={`row ${style.card_content}`}>
                <div className={`col-3`}>
                    <img className={`${style.card_img}`} src={user_image} alt={'Job'}/>
                </div>
                <div className={`pt-1 col-9 ${style.title}`}>
                    <h4>{title}</h4>
                    <div className={`d-flex ${style.place}`}>
                    <i className="fas fa-thumbtack"></i>
                    <p>{place}</p>
                    </div>
                </div>
            </div>

            <div className={`row ${style.card_content}`}>
                <h5>{user_name}</h5>
                <p className={style.cardDescription}>{description}</p>
            </div>

            <div className={`row ${style.card_footer}`}>
                <p>{created_at}</p>
            </div>
            </div>
        </div>
        </>
    );
}

export default Card;