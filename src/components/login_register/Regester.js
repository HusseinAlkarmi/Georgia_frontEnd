import React from "react";
import loginStyle from "./components/login.module.css";
import profileImg from "./components/images/loginChar.png"
import { useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import axios from "axios";



function Login(){
    const [formData, setFormData] = useState({name: '',  email: '', password: '', remember: 0});


    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setFormData({...formData, email: e.target.value})
        } else if (e.target.name === 'password') {
            setFormData({...formData, password: e.target.value})
        } else if (e.target.name === 'name') {
            setFormData({...formData, name: e.target.value})
        }else if (e.target.name === 'last_name') {
            setFormData({...formData, last_name: e.target.value})
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


        axios.post("https://dashboard.allarabinusa.com/api/v1/en/register", userInfo).then((response) => {
        console.log(response.data);
  
        setFormData({name: '', email: '', password: '', remember: 0});
        
      }).catch((error) => {
        console.error(error);
      });


  
    }


    const [showModalRegester, setShowModalRegester] = useState(false);

    const handleOpenModalRegester = () => {
        document.body.style.overflow = 'hidden';
        setShowModalRegester(true)
    };

    return(
        
        <div className={loginStyle.loginBody}>
            <div className={`col-lg-3 col-md-8 col-sm-10 ${loginStyle.profileCard}`}>
                <div className="row">
                     <img src={profileImg} alt="react logo" className={loginStyle.profileImg} />
                </div>
                <form>
                    <div className={`row mt-4 ${loginStyle.formRow}`}>
                    <label htmlFor="name" className={`col-2 `}><i className={`fas fa-user ${loginStyle.icon}`}></i></label>
                    <input 
                        className={`col-10 ${loginStyle.formControl}`}
                        id="name"
                        name="name"
                        placeholder="User Name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    </div>
                    <div className={`row mt-4 ${loginStyle.formRow}`}>
                    <label htmlFor="email" className={`col-2 `}><i className={`fas fa-envelope ${loginStyle.icon}`}></i></label>
                    <input 
                        className={`col-10 ${loginStyle.formControl}`}
                        id="email"
                        name="email"
                        placeholder="Email ID"
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
                        placeholder="Password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    </div>

                    <div className={`row mt-4`}>
                        <div className={`col-6 ${loginStyle.rememberDiv}`}>
                        <input id="rememberReg"  onClick={rememberClick} value={formData.remember} type="checkbox" className={`col-2 ${loginStyle.checkbox}`}/>
                        <label htmlFor="rememberReg" className={`col-10 ${loginStyle.rememberLabel}`}>Remember me</label>
                        </div>

                        <div className={`col-6 ${loginStyle.forgotDiv}`}>
                            <a href="#" className={`col-12 ${loginStyle.forgotLink}`}>Forgot password?</a>
                        </div>
                        
                    </div>

                    <div className="row">
                       <button className={`mt-4 btn rounded-10 w-10 ${loginStyle.loginBtn}`} type="submit" onClick={handleClick}>Regester</button>

                    </div>

                </form>

                <div className="row">
                    <h4 className={`mt-3 ${loginStyle.loginTitleChoice}`}>Or login with </h4>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                    <a className=" col-2" href="#"><i className={`fab fa-facebook-square ${loginStyle.facebook} ${loginStyle.socialIcon}`}></i></a>
                    <a className=" col-2" href="#"><i className={`fab fa-google-plus-square ${loginStyle.google} ${loginStyle.socialIcon}`}></i></a>
                    <a className=" col-2" href="#"><i className={`fab fa-twitter-square ${loginStyle.twitter} ${loginStyle.socialIcon}`}></i></a>
                </div>

                <div className="row mt-5">
                    {/* <Link className={`${loginStyle.loginToAccount}`} to="/login">Login to account</Link> */}
                    <button className={`${loginStyle.loginToAccount}`} onClick={handleOpenModalRegester}>Login to account</button>
                </div>


                

            </div>
        </div>
        
    );
}

export default Login;