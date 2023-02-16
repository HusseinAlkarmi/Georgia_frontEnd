import React from "react";
import style from './footer.module.css';

function LeftFooter(){
    return(
        <>
            <div className={`col-sm-12 col-md-6 col-lg-4 ${style.imgDiv}`}>
                <img className="" src={require("./images/footerLogo.png")} alt="Footer Logo" />
            </div>
        </>
    );
}

export default LeftFooter;