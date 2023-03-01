import React, { useState } from "react";
import style from "../../../assets/style/postJob_rent.module.css";
import Alert from '../../customAlert/Alert';

function RentForm({ setRentOpen }) {
  const [rentFormData, setRentFormData] = useState({'name':'', 'location':'', 'type':'', 'phone':'', 'email':'', 'description':'', 'file':'', 'price':'', 'bathRoom':'', 'room':''});

  const [show, setShow] = useState(false);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRentFormData({ ...rentFormData, [name]: value });
};

  const handleSubmit = (event) => {
    event.preventDefault();
    if(rentFormData.phone === '' && rentFormData.email === ''){
      setShow(true);
      setWarning(true);
    }else{
      console.log( rentFormData );
      setShow(true);
      setSuccess(true);
    }
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
            <input name="name" type="text" id="name" className={style.fieldWidth} onChange={handleChange}/>
          </div>
          <div className={style.subDiv}>
            <label htmlFor="location">Location</label>
            <div className={style.requiredClass}>
              <input
              name="location"
                type="text"
                id="location"
                className={style.fieldWidth}
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <label htmlFor="Type">Type</label>
        <div className={style.requiredClass}>
          <input name="type" type="text" id="Type" required onChange={handleChange}/>

          <span className="req">*</span>
        </div>

        <div className={style.mainDiv}>
          <div className={style.subDiv}>
            <label htmlFor="Title">Room</label>
            <select name="room" id="Type" className={style.fieldWidth} onChange={handleChange}>
              <option value="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className={style.subDiv}>
            <label htmlFor="Title">Bathroom</label>
            <select name="bathRoom" id="Type" className={style.fieldWidth} onChange={handleChange}>
              <option value="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <label htmlFor="Price">Price</label>
        <input name="price" type="text" id="Price" onChange={handleChange}/>
        <br />
        <input name="file" type="file" onChange={handleChange}/>

        <label htmlFor="phoneNumber">Phone Number</label>
        <div className={style.requiredClass}>
          <input name="phone" type="tel" id="phoneNumber" onChange={handleChange}/>
          <span className="req">*</span>
        </div>

        <label htmlFor="email">Email</label>
        <input name="email" type="email" id="email" onChange={handleChange}/>
        <br />
        <textarea name="description" id="description" className={style.textAreaHeight} onChange={handleChange}/>
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

export default RentForm;
