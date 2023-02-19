import React, { useState, useEffect } from 'react';

  
function InfoRow(props) {
    const [userData, setUserData] = useState(props);
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState(props);


    function handleEditClick() {
        setIsEditing(true);
        setEditedData(userData);
      }

      function handleCancelClick() {
        setUserData(editedData);
        setIsEditing(false);
      }


      function handleSaveClick() {
        // fetch('https://jsonplaceholder.typicode.com/users/1', {
        //   method: 'PUT',
        //   body: JSON.stringify(editedData),
        //   headers: {
        //     'Content-type': 'application/json; charset=UTF-8',
        //   },
        // })
        //   .then(response => response.json())
        //   .then(data => {
        //     setUserData(data);
        //     setIsEditing(false);
        //   })
        //   .catch(error => console.log(error));
        setEditedData(userData);
        setIsEditing(false);
      }

      function handleInputChange(event) {
        const { name, value } = event.target;
        setUserData(prevData => ({ ...prevData, [name]: value }));
      }
   

    return(
        <>

      <div>
      <h1>Profile Page</h1>
      {isEditing ? (
        <>
        <div className='row'>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
            />
        </div>
          
        <div className='row'>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
            />
          </div>

          <div className='row'>
            <label htmlFor="phone">Phone:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
            />
           </div>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
        </>
    );
}

export default InfoRow;