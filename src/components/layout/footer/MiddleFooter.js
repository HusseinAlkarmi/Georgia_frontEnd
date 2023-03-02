import React from "react";
import style from '../../../assets/style/footer.module.css';
import { Link } from "react-router-dom";

function MiddleFooter(){

    const handleChangePage = () => {
        window.scrollTo(0, 0);
      };

    return(
        <>
        <div className={`col-sm-12 col-md-6 col-lg-4 ${style.serviceFooter}`}>
            <ul className={style.midUl}>

            <Link to="/Jobs/Job" className={style.navLink} onClick={handleChangePage}>
                 <li className={style.midService}>Services</li>
            </Link>

            <Link to="/Jobs/Job" className={style.navLink} onClick={handleChangePage}>
                 <li className={style.midService}>Jobs</li>
            </Link>

            <Link to="/Jobs/Rent" className={style.navLink} onClick={handleChangePage}>
                 <li className={style.midService}>Rent</li>
            </Link>

            <Link to="/Blog" className={style.navLink} onClick={handleChangePage}>
                 <li className={style.midService}>Blog</li>
            </Link>

            <Link to="/Blog" className={style.navLink} onClick={handleChangePage}>
                 <li className={style.midService}>About</li>
            </Link>

            <Link to="/Blog" className={style.navLink} onClick={handleChangePage}>
                 <li className={style.midService}>Contact</li>
            </Link>

              
            </ul>
        </div>
        </>
    );
}

export default MiddleFooter;