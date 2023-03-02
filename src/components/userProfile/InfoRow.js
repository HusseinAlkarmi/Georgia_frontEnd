import React, { useState, useEffect } from 'react';
import style from '../../assets/style/userProfile.module.css';
  
function InfoRow({Data, setData}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState(Data);

    function handleEditClick() {
        setIsEditing(true);
        setEditedData(Data);
      }

      function handleCancelClick() {
        setEditedData(Data);
        setIsEditing(false);
      }

      function HandleSaveClick() {
        setData(editedData);
        setIsEditing(false);
      }

      function handleInputChange(event) {
        const { name, value } = event.target;
        setEditedData({...editedData, [name]: value});
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
                value={editedData.name}
                onChange={handleInputChange}
            />
        </div>
          
        <div className={`row col-11 ${style.inputRow}`}>
            <label className={style.labelProfile} htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={editedData.email}
                onChange={handleInputChange}
            />
          </div>

          <div className={`row col-11 ${style.inputRow}`}>
            <label className={style.labelProfile} htmlFor="phone_number">Phone:</label>
            <input
                type="tel"
                id="phone"
                name="phone_number"
                value={editedData.phone_number}
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
                value={editedData.name}
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
                value={editedData.email}
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
                value={editedData.phone_number}
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