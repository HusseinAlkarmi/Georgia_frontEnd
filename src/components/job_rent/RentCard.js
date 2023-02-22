import React from "react";
import style from "../../assets/style/job_rent/card.module.css";


function RentCard({id, title, name, setPopRentInfo, popRentInfo, setShowModal, setRentPopUp}){

    function handleRentCardClick(){
        document.body.style.overflow = 'hidden';
        setPopRentInfo({id});
        setPopRentInfo({...popRentInfo, id: id, name: name});
        setRentPopUp(true);
        setShowModal(true);
    }


    return(
        <>
        <div className={`col-sm-12 col-md-6 col-lg-4`}>
            <div className={style.rentCard} onClick={handleRentCardClick}>
                <div className={style.rentCardBody}>
                    <img className={style.rentCardImg} src={require(`../../assets/Images/job_rent/${id}_rent.png`)} alt={name}/>
                    <div className={style.rentCardInfo}>
                        <h5>{name}</h5>
                        <p><i className="fas fa-map-marker-alt"></i> Address</p>

                        <div className="d-flex col-10 justify-content-between">
                        <p><i className="fas fa-bed"></i> 3 Bedrooms</p>
                        <p><i className="fas fa-bath"></i> 2 Bathrooms</p>
                        </div>

                        <div className="d-flex col-12 justify-content-between">
                            <h5>200$</h5>
                            <div className="d-flex col-10 justify-content-end">
                                <i className={`fas fa-arrow-up ${style.rentCardBottomIcon}`}></i>
                                <i className={`fas fa-bookmark ${style.rentCardBottomIcon}`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}

export default RentCard;