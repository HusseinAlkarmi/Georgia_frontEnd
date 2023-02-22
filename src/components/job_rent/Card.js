import React from "react";
import style from "../../assets/style/job_rent/card.module.css";


function Card({id, title, name, setPopJobInfo, popJobInfo, setShowModal, setJobPopUp}){

    function handleJobCardClick(){
        document.body.style.overflow = 'hidden';
        setPopJobInfo({id});
        setPopJobInfo({...popJobInfo, id: id, name: name});
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
                    <img className={`${style.card_img}`} src={require('../../assets/Images/job_rent/black.png')} alt={'Job'}/>
                </div>
                <div className={`pt-1 col-9 ${style.title}`}>
                    <h4>{title}</h4>
                    <div className={`d-flex ${style.place}`}>
                    <i className="fas fa-thumbtack"></i>
                    <p>Place</p>
                    </div>
                </div>
            </div>

            <div className={`row ${style.card_content}`}>
                <h5>{name}</h5>
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.</p>
            </div>

            <div className={`row ${style.card_footer}`}>
                <p>4 days ago</p>
            </div>
            </div>
        </div>
        </>
    );
}

export default Card;