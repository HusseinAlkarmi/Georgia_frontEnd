import React from "react";
import style from '../../../assets/style/footer.module.css';


function RightFooter(){
    return(
        <>
        <div className={`col-sm-12 col-md-6 col-lg-3 ${style.contactFooter}`}>
            <h2 className={style.rightTitle}>Contact Info</h2>

            <ul className={style.rightUl}>
                
                <li>
                    <a className={style.midLink} href="google.com" target="_blank"><i className="fab fa-facebook-f"></i> arabingeorgia</a>
                </li>

                <li>
                   <a className={style.midLink} href="google.com" target="_blank"><i className="fab fa-instagram"></i> arabingeorgia</a>
                </li>

                <li>
                   <a className={style.midLink} href="google.com" target="_blank"><i className="fas fa-phone-alt"></i> (470) 659-5499</a>
                </li>
              
            </ul>
        </div>
        </>
    );
}

export default RightFooter;