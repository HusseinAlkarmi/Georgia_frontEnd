import React from "react";
import style from '../../assets/style/job_rent/card.module.css';


function PopUpRent({popRentInfo}){

return(
    <>
    <div className={`${style.popRentCard}`}>
        <div className={style.popRentMainImage}>
            <img src={require(`../../assets/Images/job_rent/${popRentInfo.id}_rent.png`)} alt={popRentInfo.name}/>
        </div>
        <div className={`col-12  ${style.popRentSubImage}`}>
            <img src={require(`../../assets/Images/job_rent/${popRentInfo.id}_rent.png`)} alt={popRentInfo.name}/>
            <img src={require(`../../assets/Images/job_rent/${popRentInfo.id}_rent.png`)} alt={popRentInfo.name}/>
            <img src={require(`../../assets/Images/job_rent/${popRentInfo.id}_rent.png`)} alt={popRentInfo.name}/>
            <img src={require(`../../assets/Images/job_rent/${popRentInfo.id}_rent.png`)} alt={popRentInfo.name}/>
        </div>

        <div className={style.popRentDiscr}>
            <div className={style.popRentTitle}>
                <h1 >{popRentInfo.name}</h1>
                <div>
                    <i className={`fas fa-arrow-up ${style.popRentIcon}`}></i>
                    <i className={`fas fa-bookmark ${style.popRentIcon}`}></i>
                </div>
            </div>

            <div className={style.popRentSubDisc}>
                <p><i className="fas fa-map-marker-alt"></i> Address</p>
                <p className={style.popRentLongDisc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting= unchanged. It was popularised in the 1960s with the release of Letraset including versions of Lorem Ipsum.</p>
            </div>
            <div className="d-flex col-4 justify-content-between">
                <p><i className="fas fa-bed"></i> 3 Bedrooms</p>
                <p><i className="fas fa-bath"></i> 2 Bathrooms</p>
            </div>

            <div className="d-flex col-12 justify-content-between">
                <h1>200$</h1>

                <div className={style.popRentContact}>
                    <h3>Contact Us</h3>
                    <p><i className="fas fa-envelope-open-text"></i> lorem@gmail.com</p>
                    <p><i className="fas fa-phone-alt"></i> +962 777-777-888</p>
                </div>
            </div>

        </div>
    

    </div>
    </>
);
}

export default PopUpRent;