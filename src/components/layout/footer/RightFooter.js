import React from "react";
import style from '../../../assets/style/footer.module.css';


function RightFooter(){
    return(
        <>
        <div className={`col-sm-12 col-md-6 col-lg-4 ${style.contactFooter}`}>
            {/* <h2 className={style.rightTitle}>Contact Info</h2> */}

            <ul className={style.rightUl}>
                
                <li>
                    <a className={style.midLink} href="google.com" target="_blank"><i className="fab fa-facebook-square"></i> arabingeorgia</a>
                </li>

                <li>
                   <a className={style.midLink} href="google.com" target="_blank"><i className="fab fa-instagram"></i> arabingeorgia</a>
                </li>

                <li>
                   <a className={style.midLink} href="google.com" target="_blank"><i className="fas fa-phone-square-alt"></i> (470) 659-5499</a>
                </li>
                <li>
                   <a className={style.midLink} href="google.com" target="_blank"><i className="fas fa-envelope"></i> info@arab-georgia.com</a>
                </li>
              
            </ul>
        </div>
        </>
    );
}

export default RightFooter;