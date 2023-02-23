import React, { useState } from "react";
import style from "../../../assets/style/postJob_rent.module.css";

function JobForm({ setJobFormOpen }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };


  const handleOpenModalForm = () => {
    document.body.style.overflow = "auto";
    setJobFormOpen(false);
  };
    
  return (
    <div className={style.formDiv}>
      <div className={style.btnCloseDiv}>
      <button className={style.closeBtnForm} onClick={handleOpenModalForm}>
              <i className="fas fa-times"></i>
       </button>
      </div>
    <form className={style.form} onSubmit={handleSubmit} >
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />

      <label htmlFor="location">Location</label>
      <input type="text" id="location" />

      <label htmlFor="jobTitle">Job Title</label>
      <div className={style.requiredClass}>
        <input type="text" id="jobTitle" required />
        <span className="req">*</span>
      </div>

      <label htmlFor="jobTitle">Job Type</label>
      <input type="text" id="jobTitle" />

      <label htmlFor="Type">Type</label>
      <select id="jobType">
        <option value="">Select job type</option>
        <option value="full-time">Full time</option>
        <option value="part-time">Part time</option>
      </select>

      <label htmlFor="phoneNumber">Phone Number</label>
      <div className={style.requiredClass}>
        <input type="tel" id="phoneNumber" required />
        <span className="req">*</span>
      </div>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" />

      <label htmlFor="description">Description</label>
      <textarea id="description" />
      <div className={style.formBtnContainer}>
        <button type="submit" className={style.formBtn}>
          Send
        </button>
      </div>
    </form>
    </div>
  );
}

export default JobForm;
