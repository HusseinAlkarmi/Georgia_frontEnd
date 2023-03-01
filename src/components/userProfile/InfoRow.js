import React, { useState, useEffect } from 'react';
import style from '../../assets/style/userProfile.module.css';
import axios from 'axios';
import useAxios from "../../hooks/useFetchPost";
  
function InfoRow({Data, token , setData}) {
    // const [userData, setUserData] = useState(Data);
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState(Data);

    const formData = new FormData();
    formData.append('id', Data.id);
    formData.append('name', Data.name);
    formData.append('email', Data.email);
    formData.append('phone_number', Data.phone_number);
    formData.append('email_verified_at', Data.email_verified_at);
    const data = Object.fromEntries(formData.entries());
    console.log(data);




    function handleEditClick() {
        setIsEditing(true);
        setEditedData(Data);
      }

      function handleCancelClick() {
        setData(editedData);
        setIsEditing(false);
      }

      const [res] = useAxios("en/profile", formData, token);


      function HandleSaveClick() {
        // const [Data] = useAxios("en/profile", formData, token);
        // console.log(Data);

        try {

          // fetch(`https://dashboard.allarabinusa.com/api/v1/en/profile`, {
          //   headers: { 'Authorization': `Bearer ${token}` },
          //   method: 'POST',
          //   body: formData
          // })
          // .then((response) => console.log(response))


          // axios.post('https://dashboard.allarabinusa.com/api/v1/en/profile',userData, {
          //   headers: { 'Authorization': `Bearer ${token}` }
          // }).then((response) => response.data);
        } 
        catch (error) {
          console.log(error);
        };
        console.log(Data);
        setEditedData(Data);
        setIsEditing(false);
      }

      function handleInputChange(event) {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
      }
   

    return(
        <>

      <div>
      <h1 className={`mt-2 col-11 ${style.profileTitle}`}>Profile Page</h1>
      {isEditing ? (
        <>
        <div className={`row col-11 ${style.inputRow}`}>
            <label className={style.labelProfile} htmlFor="name">User Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={Data.name}
                onChange={handleInputChange}
            />
        </div>
          
        <div className={`row col-11 ${style.inputRow}`}>
            <label className={style.labelProfile} htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={Data.email}
                onChange={handleInputChange}
            />
          </div>

          <div className={`row col-11 ${style.inputRow}`}>
            <label className={style.labelProfile} htmlFor="phone_number">Phone:</label>
            <input
                type="tel"
                id="phone"
                name="phone_number"
                value={Data.phone_number}
                onChange={handleInputChange}
            />
           </div>
           <div className={style.btnDiv}>
            <button className={style.saveBtn} onClick={HandleSaveClick}>Save</button>
            <button className={style.cancelBtn} onClick={handleCancelClick}>Cancel</button>
           </div>
        </>
      ) : (
        <>
          <div className={`row col-11 ${style.inputRow}`}>
            <label className={style.labelProfile} htmlFor="name">User Name:</label>
            <input
            readOnly
                type="text"
                id="name"
                name="name"
                value={Data.name}
                onChange={handleInputChange}
            />
        </div>
          
        <div className={`row col-11 ${style.inputRow}`}>
            <label className={style.labelProfile} htmlFor="email">Email:</label>
            <input
            readOnly
                type="email"
                id="email"
                name="email"
                value={Data.email}
                onChange={handleInputChange}
            />
          </div>

          <div className={`row col-11 ${style.inputRow}`}>
            <label className={style.labelProfile} htmlFor="phone_number">Phone:</label>
            <input
            readOnly
                type="tel"
                id="phone"
                name="phone_number"
                value={Data.phone_number}
                onChange={handleInputChange}
            />
           </div>
          <button className={style.editBtn} onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
        </>
    );
}

export default InfoRow;