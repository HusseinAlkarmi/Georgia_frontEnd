import React, { useState } from "react";
import style from "../../assets/style/reachout.module.css";
import axios from "axios";

function RightReachout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"0000000000",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleClick = (e) => {
    e.preventDefault();
    let userInfo = formData;

    console.log({ ...userInfo });

    axios.post("https://dashboard.allarabinusa.com/api/v1/ar/contact-us", userInfo).then((response) => {
      console.log(response.data);

      setFormData({name: '', email: '', phone:"0000000000", message: ''});
      
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <>
      <div className={`col-sm-12 col-md-5 col-lg-5 ${style.rightReachout}`}>
        <form>
          <div className={`row mt-4 d-flex ${style.formDiv}`}>
            <label htmlFor="name" className={`col-1 `}>
              <i className={`fas fa-user ${style.icon}`}></i>
            </label>
            <input
              className={`col-11 ${style.formControl}`}
              id="name"
              name="name"
              placeholder="NAME"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={`row mt-4 d-flex ${style.formDiv}`}>
            <label htmlFor="email" className={`col-1 `}>
              <i className={`fas fa-envelope ${style.icon}`}></i>
            </label>
            <input
              className={`col-11 ${style.formControl}`}
              id="email"
              name="email"
              placeholder="EMAIL ID"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={`row mt-4 d-flex ${style.formMessage}`}>
           
            <textarea value={formData.message} placeholder="Message" name="message" onChange={handleChange}>{formData.message}</textarea>
          </div>

          <div className="row">
            <button
              className={`mt-4 btn rounded-10 w-10 ${style.reachoutBtn}`}
              type="submit"
              onClick={handleClick}
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RightReachout;
