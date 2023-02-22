import React from "react";
import style from '../../../assets/style/footer.module.css';

function LeftFooter(){
    return(
        <>
            <div className={`col-sm-12 col-md-6 col-lg-4 ${style.imgDiv}`}>
                <img className="" src={require("../../../assets/Images/footer/footerLogo.png")} height={240} alt="Footer Logo" />
            </div>
        </>
    );
}

export default LeftFooter;