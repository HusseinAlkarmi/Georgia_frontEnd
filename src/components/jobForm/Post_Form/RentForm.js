import React, { useState } from "react";
import style from "../../assets/style/form.module.css";

const handleSubmit = (event) => {
  event.preventDefault();
};

function RentForm() {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />

      <label htmlFor="location">Location</label>
      <div className={style.requiredClass}>
        <input type="text" id="location" required />
        <span class="req">*</span>
      </div>

      <label htmlFor="Type">Type</label>
      <div className={style.requiredClass}>
        <input type="text" id="Type" required />

        <span class="req">*</span>
      </div>

      <div className={style.typeDiv}>
        <div className={style.typeDivSelect}>
          <label htmlFor="Title">Room</label>
          <select id="Type" className={style.selectWidth}>
            <option value="">0</option>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
          </select>
        </div>
        <div className={style.typeDivSelect}>
          <label htmlFor="Title">Bathoom</label>
          <select id="Type" className={style.selectWidth}>
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
        <span class="req">*</span>
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
  );
}

export default RentForm;
