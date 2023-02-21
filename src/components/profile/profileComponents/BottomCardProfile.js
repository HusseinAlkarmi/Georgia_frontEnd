import React from "react";
import style from './profile.module.css';

function BottomCardProfile(props) {
    return(
        <>
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className={style.card}>
                <div className={style.cardBody}>
                    <h4>{props.title}</h4>
                    <p>{props.name}</p>
                    <p>{props.email}</p>
                
                 </div>
            </div>
        </div>
        </>
    );
}

export default BottomCardProfile;