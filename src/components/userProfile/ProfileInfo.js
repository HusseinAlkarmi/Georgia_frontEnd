import { React, useState, useEffect } from "react";
import LeftImage from "./LeftImage";
import RightInfo from "./RightInfo";
import style from '../../assets/style/userProfile.module.css';
import axios from 'axios';
import useAxios from "../../hooks/useFetchPost";

function ProfileInfo({setShowFavourite, setShowSave}){
    const [Data, setData] = useState([]);
    const [profile, setProfile] = useState([]);

    const token = localStorage.getItem("userToken");


    const formData = new FormData();
    formData.append('id', Data.id);
    formData.append('name', Data.name);
    formData.append('email', Data.email);
    formData.append('phone_number', Data.phone_number);
    formData.append('email_verified_at', Data.email_verified_at);
    // formData.append('photo', Data.photo);

    const data = Object.fromEntries(formData.entries());
    // console.log(Data.photo);

    const [res] = useAxios("en/client/profile", formData, token);

    useEffect(() => {
        fetchData();
        console.log(res);
      }, []);

      function fetchData() {

        // console.log(token);

           try {
              axios.get('https://allarabinusa.com/api/v1/en/client/profile', {
                headers: { 'Authorization': `Bearer ${token}` }
              }).then((response) => response.data).then(data => setData(data.data));
            } 
            catch (error) {
              console.log(error);
            };
        }

      //  console.log(Data);

    return(
        <>
        <div className={style.mainProfile}>
             <div className={`container pt-5`}>
                <div className="row justify-content-center">
                    <LeftImage formData = {formData} Data = {Data} token = {token} setData = {setData} setShowFavourite = {setShowFavourite} setShowSave = {setShowSave}/>
                    <RightInfo Data = {Data} token = {token} setData = {setData}/>
                </div>
            </div>
        </div>
       
        </>
    );
}

export default ProfileInfo;