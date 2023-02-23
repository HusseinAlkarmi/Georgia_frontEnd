import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/logo.png";
import style from "./navBar.module.css";
import "./navbar.css";
import Dropdown from "react-bootstrap/Dropdown";

import Modal from "../../login_register/Modal";

function Navbar() {
  const [Mobile, setMobile] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [t, i18n] = useTranslation();
  const [userName, setUserName] = useState("Guest");
  const [isLogedIn, setIsLogedIn] = useState(false);

  const rtlDir = () => {
    document.getElementById("root").style.direction = "rtl";
  };

  const ltrDir = () => {
    document.getElementById("root").style.direction = "ltr";
  };

  // localStorage.setItem("lang", "en");

  const [showModalLogin, setShowModalLogin] = useState(false);

  const handleOpenModalLogin = () => {
    document.body.style.overflow = "hidden";
    setShowModalLogin(true);
  };

  const handleLogOut = () => {
    setUserName("Guest");
    setIsLogedIn(false);
    localStorage.clear();
  };
  const handleCloseModalLogin = () => {
    document.body.style.overflow = "auto";
    setShowModalLogin(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const handleChangePage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav
        className={
          navbar ? `${style.activeNav} ${style.navbar}` : `${style.navbar}`
        }
      >
        <div className={style.imgDiv}>
          <img
            className={
              navbar ? `${style.logo} ${style.activeLogo}` : `${style.logo}`
            }
            src={logo}
            alt="logo"
            width="70px"
            height="65px"
          />
        </div>

        <ul
          className={
            Mobile
              ? "nav-links-mobile"
              : navbar
              ? `${style.navLinks} ${style.activeNavLinks}`
              : `${style.navLinks}`
          }
        >
          <li></li>
          <Link to="/" className={style.navLink} onClick={handleChangePage}>
            <li> {t("Home")}</li>
          </Link>
          <Link to="/Blog" className={style.navLink} onClick={handleChangePage}>
            <li>{t("Blog")}</li>
          </Link>
          <Link
            to="/Service"
            className={style.navLink}
            onClick={handleChangePage}
          >
            <li>{t("Listing")}</li>
          </Link>
          <Link
            to="/ReachOut"
            className={style.navLink}
            onClick={handleChangePage}
          >
            <li>{t("Reachout")}</li>
          </Link>
          {/* <Link to="/AboutUs" className={style.navLink} onClick={handleChangePage}><li>{t('about us')}</li></Link> */}
          <Link
            to="/Jobs/Job"
            className={style.navLink}
            onClick={handleChangePage}
          >
            <li>{t("Job")}</li>
          </Link>
          <div className={style.buttonDiv}>
            {/* <li><button onClick={handleOpenModalLogin}><GiPadlock/>{t('login')}</button></li> */}

            <li>
              {i18n.language === "en" && (
                <button
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    rtlDir();
                  }}
                >
                  <i className="fas fa-globe"></i> AR
                </button>
              )}
              {i18n.language === "ar" && (
                <button
                  onClick={() => {
                    i18n.changeLanguage("en");
                    ltrDir();
                  }}
                >
                  <i className="fas fa-globe"></i> EN
                </button>
              )}
            </li>

            <Dropdown>
              <Dropdown.Toggle
                className={style.dropDown}
                id="dropdown-autoclose-true"
              >
                <li>
                  <FontAwesomeIcon icon={faUser} /> Welcome, {userName}
                </li>
              </Dropdown.Toggle>

              {isLogedIn ? (
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link
                      to="/Profile"
                      className={style.navLink}
                      onClick={handleChangePage}
                    >
                      <FontAwesomeIcon icon={faUser} /> Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogOut}>
                    <i className="fas fa-sign-out-alt"></i> LogOut
                  </Dropdown.Item>
                </Dropdown.Menu>
              ) : (
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleOpenModalLogin}>
                    <i className="fas fa-sign-in-alt"></i> Login
                  </Dropdown.Item>
                </Dropdown.Menu>
              )}
            </Dropdown>
            {/* <Link to="/Profile" style={{background:"transparent"}}><li><button><FontAwesomeIcon icon={faUser} /> Welcome,  {userName}</button></li></Link> */}
          </div>
        </ul>
      </nav>
      <button className={"mobile-menu-icon"} onClick={() => setMobile(!Mobile)}>
        {/* {Mobile ? <ImCross/> : <FaBars />} */}
        <i className="fas fa-bars"></i>
      </button>

      {showModalLogin && (
        <div>
          <div className={`closeModalDiv`}>
            <button className={`closeBtnModal`} onClick={handleCloseModalLogin}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <Modal
            handleCloseModalLogin={handleCloseModalLogin}
            setIsLogedIn={setIsLogedIn}
            setUserName={setUserName}
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
