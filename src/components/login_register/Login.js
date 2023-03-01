import React from "react";
import loginStyle from "./components/login.module.css";
import profileImg from "./components/images/loginChar.png"
// import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import Regester from "./Regester";
import axios from "axios";
import {useTranslation} from "react-i18next";
import {createContext, useContext, useState,useEffect } from 'react';




function Login(props){
    const [formData, setFormData] = useState({email: '', password: '', remember: 0});
    const [session, setSession] = useState({userName:'', isLoggedIn: false, token: ''});

    const [t, i18n] = useTranslation();
    

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setFormData({...formData, email: e.target.value})
        } else if (e.target.name === 'password') {
            setFormData({...formData, password: e.target.value})
        }
    };
    const rememberClick = () => {
        if(formData.remember == 0){
            setFormData({...formData, remember: 1});
        }else if(formData.remember == 1){
            setFormData({...formData, remember: 0});
        }
    };

    

    const handleClick = (e) => {
        e.preventDefault();
        let userInfo = formData;
        console.log({...userInfo});


        axios.post("https://dashboard.allarabinusa.com/api/v1/en/login", userInfo).then((response) => {
            console.log(response.data);
            // console.log(response.data.data.user.name);
            // console.log(response.data.data.token);
            var name = response.data.data.user.name;
            var tok = response.data.data.token;

            props.setUserName(name);
            localStorage.setItem("userToken", tok);
            localStorage.setItem("userName", name);
            props.setIsLogedIn(true);
            props.handleCloseModalLogin();
            
            setSession({userName: name, isLoggedIn: true, token: tok});

            setFormData({email: '', password: '', remember: 0});
            
          }).catch((error) => {
            console.error(error);
          });

    }

  

    const [showModalRegester, setShowModalRegester] = useState(false);

    const handleOpenModalRegester = () => {
        document.body.style.overflow = 'hidden';
        setShowModalRegester(true)
    };
    const handleCloseModalRegester = () => {
        document.body.style.overflow = 'auto';
        setShowModalRegester(false);
    }

    return(
        <>
       
        <div className={loginStyle.loginBody}>
            <div className={`col-lg-3 col-md-8 col-sm-10 ${loginStyle.profileCard}`}>

               
                <div className="row">
                     <img src={profileImg} alt="react logo" className={loginStyle.profileImg} />
                </div>
                <form>
                    <div className={`row mt-4 ${loginStyle.formRow}`}>
                    <label htmlFor="email" className={`col-2 `}><i className={`fas fa-envelope ${loginStyle.icon}`}></i></label>
                    <input 
                        className={`col-10 ${loginStyle.formControl}`}
                        id="email"
                        name="email"
                        placeholder={t('Email ID')}
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </div>

                    <div className={`row mt-4 ${loginStyle.formRow}`}>
                    <label htmlFor="email" className={`col-2 `}><i className={`fas fa-lock ${loginStyle.icon}`}></i></label>
                    <input 
                        className={`col-10 ${loginStyle.formControl}`}
                        id="password"
                        name="password"
                        placeholder={t('password')}
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    </div>

                    <div className={`row mt-4`}>
                        <div className={`col-6 ${loginStyle.rememberDiv}`}>
                        <input id="remember"  onClick={rememberClick} value={formData.remember} type="checkbox" className={`col-2 ${loginStyle.checkbox}`}/>
                        <label htmlFor="remember" className={`col-10 ${loginStyle.rememberLabel}`}>{t('Remember me')}</label>
                        </div>

                        <div className={`col-6 ${loginStyle.forgotDiv}`}>
                            <a href="#" className={`col-12 ${loginStyle.forgotLink}`}>{t('Forgot password?')}</a>
                        </div>
                        
                    </div>

                    <div className="row">
                       <button className={`mt-4 btn rounded-10 w-10 ${loginStyle.loginBtn}`} type="submit" onClick={handleClick}>{t('login')}</button>

                    </div>

                </form>

                <div className="row mt-5">
                    <h4 className={`mt-3 ${loginStyle.loginTitleChoice}`}>Or login with </h4>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                    <a className=" col-2" href="#"><i className={`fab fa-facebook-square ${loginStyle.facebook} ${loginStyle.socialIcon}`}></i></a>
                    <a className=" col-2" href="#"><i className={`fab fa-google-plus-square ${loginStyle.google} ${loginStyle.socialIcon}`}></i></a>
                    <a className=" col-2" href="#"><i className={`fab fa-twitter-square ${loginStyle.twitter} ${loginStyle.socialIcon}`}></i></a>
                </div>

                <div className="row mt-2">
                {/* <Link className={`${loginStyle.regester}`} to="/Regester">Regester New Account</Link> */}
                <button className={`${loginStyle.regester}`} onClick={handleOpenModalRegester}>Register New Account</button>
                </div>


                

            </div>
        </div>

        {showModalRegester && (
              <div>
                {/* <div className="">
                <button className="" onClick={handleCloseModalRegester}><i className="fas fa-times"></i></button>
                </div> */}
                <Regester close="handleCloseModalRegester"/>
              </div>

      )}
        </>
        
    );
}

export default Login;

