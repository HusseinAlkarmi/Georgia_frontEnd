import React from "react";

import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./navbar.css";
// import {FaBars} from "react-icons/fa";
// import {ImCross} from "react-icons/im";
// import {GiPadlock} from "react-icons/gi";
// import {IoPerson} from "react-icons/io5";
// import {IoEarthOutline} from "react-icons/io5";
import {useTranslation} from "react-i18next";
// import Modal from "./login/Modal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logo from './images/logo.png'


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
        if(window.scrollY >= 80) {
            setNavbar(true);
        }else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll',changeBackground);

    // font awesome example
    // <FontAwesomeIcon icon={faCoffee} />

    return(
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'} >
                <img className={navbar ? 'logo active' : 'logo'} src={logo} alt="logo"  width="70px" height="65px"/>

                <ul className={ Mobile ?  'nav-links-mobile' : (navbar ? 'nav-links active' : 'nav-links')}>
                    <Link to="/" style={{background:"transparent"}}><li> {t('Home')}</li></Link>
                    <Link to="/Blog" style={{background:"transparent"}}><li>{t('Blog')}</li></Link>
                    <Link to="/Service" style={{background:"transparent"}}><li>{t('Service')}</li></Link>
                    <Link to="/ReachOut" style={{background:"transparent"}}><li>{t('Reachout')}</li></Link>
                    <Link to="/AboutUs" style={{background:"transparent"}}><li>{t('about us')}</li></Link>
                    <Link to="/Jobs" style={{background:"transparent"}}><li>{t('Job')}</li></Link>
                    <div className={'buttonDiv'}>
                       
                        {/* <li><button onClick={handleOpenModalLogin}><GiPadlock/>{t('login')}</button></li> */}

                        <li>
                        {i18n.language === 'en' && <button onClick={()=> {i18n.changeLanguage('ar'); rtlDir()}}>AR</button> }
                        {i18n.language === 'ar' && <button onClick={()=> {i18n.changeLanguage('en'); ltrDir()}}>EN</button> }
                        </li>

                        <Link to="/Profile" style={{background:"transparent"}}><li><button><FontAwesomeIcon icon={faUser} /> Welcome,  {userName}</button></li></Link>
                       
                    </div>

                </ul>

            </nav>
            <button className={'mobile-menu-icon'} onClick={() => setMobile(!Mobile)}>
                {/* {Mobile ? <ImCross/> : <FaBars />} */}
                navMobileBtn
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




  

      

 