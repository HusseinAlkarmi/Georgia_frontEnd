import React from "react";
import style from '../../../assets/style/footer.module.css';


function MiddleFooter(){
    return(
        <>
        <div className={`col-sm-12 col-md-6 col-lg-2 ${style.serviceFooter}`}>
            <h2 className={style.midTitle}>Services</h2>

            <ul className={style.midUl}>
                
                <li>
                    <h3 className={style.midService}>Blogs</h3>
                </li>

                <li>
                    <h3 className={style.midService}>Contact</h3>
                </li>

                <li>
                    <h3 className={style.midService}>About</h3>
                </li>
              
            </ul>
        </div>
        </>
    );
}

export default MiddleFooter;