import React, { useState } from "react";
import style from "../../assets/style/form.module.css";

const handleSubmit = (event) => {
  event.preventDefault();
};

function JobForm() {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />

      <label htmlFor="location">Location</label>
      <input type="text" id="location" />

      <label htmlFor="jobTitle">Job Title</label>
      <div className={style.requiredClass}>
        <input type="text" id="jobTitle" required />
        <span class="req">*</span>
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
        <span class="req">*</span>
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
  );
}

export default JobForm;
