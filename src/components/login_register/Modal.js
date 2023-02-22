import React from "react";
import { useState } from "react";
import Login from "./Login";
import loginStyle from "./components/login.module.css";


function Modal(props){

    const [showModalLogin, setShowModalLogin] = useState(true);

    const handleOpenModalLogin = () => {
        document.body.style.overflow = 'hidden';
        setShowModalLogin(true)
    };
    const handleCloseModalLogin = () => {
        document.body.style.overflow = 'auto';
        setShowModalLogin(false);
    }

    return(
        <>
         {showModalLogin && (
              <div>
                <Login handleCloseModalLogin = {props.handleCloseModalLogin} setIsLogedIn = {props.setIsLogedIn} setUserName = {props.setUserName} regesterBtn="handleCloseModal" />
              </div>

      )}



        </>
    );

}
export default Modal;