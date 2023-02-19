import React from "react";

import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logo from './images/logo.png'
import style from './navBar.module.css'
import "./navbar.css";

// import Modal from "./login/Modal"


function Navbar() {

    const [Mobile,setMobile] = useState(false);
    const [navbar,setNavbar] = useState(false);
    const [t, i18n] = useTranslation();
    const [userName, setUserName] = useState("Guest");

    const rtlDir = () => {
        document.getElementById('root').style.direction = 'rtl'; 
    }

    const ltrDir = () => {
        document.getElementById('root').style.direction = 'ltr'; 
    }

    const [showModalLogin, setShowModalLogin] = useState(false);

    const handleOpenModalLogin = () => {
        document.body.style.overflow = 'hidden';
        setShowModalLogin(true)
    };
    const handleCloseModalLogin = () => {
        document.body.style.overflow = 'auto';
        setShowModalLogin(false);
    }

    const changeBackground = () => {
        if(window.scrollY >= 1) {
            setNavbar(true);
        }else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll',changeBackground);

    const handleClick = () => {
        window.scrollTo(0, 0);
      }

    return(
        <>
            <nav className={navbar ? `${style.activeNav} ${style.navbar}` : `${style.navbar}`} >
                <div className={style.imgDiv}>
                     <img className={navbar ? `${style.logo} ${style.activeLogo}` : `${style.logo}`} src={logo} alt="logo"  width="70px" height="65px"/>
                </div>

                <ul className={ Mobile ?  'nav-links-mobile' : (navbar ? `${style.navLinks} ${style.activeNavLinks}` : `${style.navLinks}`)}>
                    <li></li>
                    <Link to="/" className={style.navLink} onClick={handleClick}><li> {t('Home')}</li></Link>
                    <Link to="/Blog" className={style.navLink} onClick={handleClick}><li>{t('Blog')}</li></Link>
                    <Link to="/Service" className={style.navLink} onClick={handleClick}><li>{t('Service')}</li></Link>
                    <Link to="/ReachOut" className={style.navLink} onClick={handleClick}><li>{t('Reachout')}</li></Link>
                    <Link to="/AboutUs" className={style.navLink} onClick={handleClick}><li>{t('about us')}</li></Link>
                    <Link to="/Jobs" className={style.navLink} onClick={handleClick}><li>{t('Job')}</li></Link>
                    <div className={style.buttonDiv}>
                       
                        {/* <li><button onClick={handleOpenModalLogin}><GiPadlock/>{t('login')}</button></li> */}

                        <li>
                        {i18n.language === 'en' && <button onClick={()=> {i18n.changeLanguage('ar'); rtlDir()}}><i className="fas fa-globe"></i> AR</button> }
                        {i18n.language === 'ar' && <button onClick={()=> {i18n.changeLanguage('en'); ltrDir()}}><i className="fas fa-globe"></i> EN</button> }
                        </li>

                        <Link to="/Profile" style={{background:"transparent"}}><li><button><FontAwesomeIcon icon={faUser} /> Welcome,  {userName}</button></li></Link>
                       
                    </div>

                </ul>

            </nav>
            <button className={'mobile-menu-icon'} onClick={() => setMobile(!Mobile)}>
                {/* {Mobile ? <ImCross/> : <FaBars />} */}
                <i className="fas fa-bars"></i>
            </button>


            {showModalLogin && (
              <div>
                <div className={`closeModalDiv`}>
                <button className={`closeBtnModal`} onClick={handleCloseModalLogin}><i className="fas fa-times"></i></button>
                </div>
                {/* <Modal userNameHandler = {setUserName}/> */}
              </div>

      )}

        </>
    );

}

export default Navbar;




  

      

 