import React from "react";
import style from '../../../assets/style/footer.module.css';
import LeftFooter from './LeftFooter';
import MiddleFooter from "./MiddleFooter";
import RightFooter from "./RightFooter";
import BottomFooter from "./BottomFooter";
import RightLogo from "./RightLogo";


function Footer(){
    return(
        <>
        <div className={`${style.footerMainDiv}`}>
            <div className={`container ${style.footerContainer}`}>
            <div className={`row mt-5 ${style.footerRow}`}>
                <LeftFooter/>
                <MiddleFooter/>
                <RightFooter/>
                <RightLogo/>
                
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