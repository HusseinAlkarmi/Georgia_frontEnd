import React, { useState } from "react";
import style from "../../../assets/style/postJob_rent.module.css";

function RentForm({ setRentOpen }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOpenRentModal = () => {
    document.body.style.overflow = "auto";
    setRentOpen(false);
  };
  return (
    <div className={style.formDiv}>
      <div className={style.btnCloseDiv}>
        <button className={style.closeBtnForm} onClick={handleOpenRentModal}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.mainDiv}>
          <div className={style.subDiv}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className={style.fieldWidth} />
          </div>
          <div className={style.subDiv}>
            <label htmlFor="location">Location</label>
            <div className={style.requiredClass}>
              <input
                type="text"
                id="location"
                className={style.fieldWidth}
                required
              />
            </div>
          </div>
        </div>

        <label htmlFor="Type">Type</label>
        <div className={style.requiredClass}>
          <input type="text" id="Type" required />

          <span className="req">*</span>
        </div>

        <div className={style.mainDiv}>
          <div className={style.subDiv}>
            <label htmlFor="Title">Room</label>
            <select id="Type" className={style.fieldWidth}>
              <option value="">0</option>
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
          </div>
          <div className={style.subDiv}>
            <label htmlFor="Title">Bathroom</label>
            <select id="Type" className={style.fieldWidth}>
              <option value="">0</option>
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
          </div>
        </div>

        <label htmlFor="Price">Price</label>
        <input type="text" id="Price" />
        <br />
        <input type="file" />

        <label htmlFor="phoneNumber">Phone Number</label>
        <div className={style.requiredClass}>
          <input type="tel" id="phoneNumber" required />
          <span className="req">*</span>
        </div>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <br />
        <textarea id="description" className={style.textAreaHeight} />
        <div className={style.formBtnContainer}>
          <button type="submit" className={style.formBtn}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default RentForm;
