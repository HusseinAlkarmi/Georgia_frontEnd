import React from "react";
import style from './footer.module.css';
import LeftFooter from './LeftFooter';
import MiddleFooter from "./MiddleFooter";
import RightFooter from "./RightFooter";
import BottomFooter from "./BottomFooter";


function Footer(){
    return(
        <>
        <div className={`${style.footerMainDiv}`}>
            <div className={`container ${style.footerContainer}`}>
            <div className={`row mt-5 ${style.footerRow}`}>
                <LeftFooter/>
                <MiddleFooter/>
                <RightFooter/>
                
            </div>

            </div>
            <div className={`row ${style.bottomRow}`}>
                <BottomFooter/>
            </div>
        </div>
        </>
    );
}

export default Footer;