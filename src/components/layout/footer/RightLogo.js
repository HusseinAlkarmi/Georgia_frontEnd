import React from "react";
import style from '../../../assets/style/footer.module.css';

function LeftFooter(){
    return(
        <>
            <div className={`col-sm-12 col-md-6 col-lg-3 ${style.imgDiv}`}>
                <img className="" src={require("../../../assets/Images/footer/rightFooterLogo.png")} height={300} alt="Footer Logo" />
            </div>
        </>
    );
}

export default LeftFooter;