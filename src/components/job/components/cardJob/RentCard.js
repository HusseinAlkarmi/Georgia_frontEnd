import React from "react";
import style from "./card.module.css";


function Card({id, title, name}){
    return(
        <>
        <div className={`col-sm-12 col-md-6 col-lg-4`}>
            <div className={style.rentCard}>
                <div className={style.rentCardBody}>
                    <img className={style.rentCardImg} src={require(`./images/${id}_rent.png`)} alt={name}/>
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





        {/* <div  className={`col-sm-12 col-md-6 col-lg-4`}>
            <div className={`${cardStyle.card_body}`}>
            
            <div className={`row`}>
                <div className={`col-12 d-flex ${cardStyle.icon_row}`}>
                    <i className="fas fa-arrow-up"></i>
                    <i className="fas fa-bookmark"></i>
                 </div>
            </div>

            <div className={`row ${cardStyle.card_content}`}>
                <div className={`col-3`}>
                    <img className={`${cardStyle.card_img}`} src={require('./images/black.png')}/>
                </div>
                <div className={`pt-1 col-9 ${cardStyle.title}`}>
                    <h4>{title}</h4>
                    <div className={`d-flex ${cardStyle.place}`}>
                    <i className="fas fa-thumbtack"></i>
                    <p>Place</p>
                    </div>
                </div>
            </div>

            <div className={`row ${cardStyle.card_content}`}>
                <h5>{name}</h5>
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.</p>
            </div>

            <div className={`row ${cardStyle.card_footer}`}>
                <p>4 days ago</p>
            </div>
            </div>
        </div> */}
        </>
    );
}

export default Card;