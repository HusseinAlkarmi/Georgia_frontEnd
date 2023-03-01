import React, { useState } from "react";
import style from "../../../assets/style/postJob_rent.module.css";
import Alert from '../../customAlert/Alert';

function JobForm({ setJobFormOpen }) {
  const [jobFormData, setJobFormData] = useState({'name':'', 'location':'', 'jobTitle':'', 'type':'', 'phone':'', 'email':'', 'salary':'', 'description':''});

  const [show, setShow] = useState(false);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobFormData({ ...jobFormData, [name]: value });
};

  const handleSubmit = (event) => {
    event.preventDefault();
    if(jobFormData.phone === '' && jobFormData.email === ''){
      setShow(true);
      setWarning(true);
    }else{
      console.log( jobFormData );
      setShow(true);
      setSuccess(true);
    }
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
      <input name="name" type="text" id="name" onChange={handleChange} />

      <label htmlFor="location">Location</label>
      <input name="location" type="text" id="location" onChange={handleChange}/>

      <label htmlFor="jobTitle">Job Title</label>
      <div className={style.requiredClass}>
        <input name="jobTitle" type="text" id="jobTitle" required onChange={handleChange}/>
        <span className="req">*</span>
      </div>

      <label htmlFor="Type">Type</label>
      <select id="jobType" name="type" onChange={handleChange}>
        <option value="">Select job type</option>
        <option value="full-time">Full time</option>
        <option value="part-time">Part time</option>
      </select>

      <label htmlFor="salary">Salary</label>
      <input type="text" id="salary" name="salary" onChange={handleChange}/>

      <label htmlFor="phoneNumber">Phone Number</label>
      <div className={style.requiredClass}>
        <input type="tel" id="phoneNumber" name="phone"  onChange={handleChange}/>
        {/* <span className="req">*</span> */}
      </div>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" onChange={handleChange}/>

      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" onChange={handleChange}/>
      <div className={style.formBtnContainer}>
        <button type="submit" className={style.formBtn}>
          Post
        </button>
      </div>

      {success?      
       <Alert type="success" message="Your post published successfuly." show = {show} setShow={setShow} time = '4000'/>
      :
      <Alert type="warning" message="Please fill phone number or email address." show = {show} setShow={setShow} time = '4000'/>
      }

    </form>

 
    </div>
  );
}

export default JobForm;
