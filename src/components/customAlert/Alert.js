import React, {useState} from "react";
import style from '../../assets/style/alert.module.css';

function Alert({type, message, show, setShow, time}) {
    // const [show, setShow] = useState(false);
    {type === 'warning'? type = style.warning : type = style.success}

    setTimeout(() => setShow(false), time);

    return(
    <>
    {show && (
    <div>
      <p className={type}>{message}</p>
    </div>
     )} 
    </>
);

}

export default Alert;