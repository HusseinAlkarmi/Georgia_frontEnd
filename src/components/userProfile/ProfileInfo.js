import { React, useState, useEffect } from "react";
import LeftImage from "./LeftImage";
import RightInfo from "./RightInfo";
import style from '../../assets/style/userProfile.module.css';
import axios from 'axios';


function ProfileInfo({setShowFavourite, setShowSave}){
    const [Data, setData] = useState([]);
    const [profile, setProfile] = useState([]);

    const token = localStorage.getItem("userToken");

    useEffect(() => {
        fetchData();
      }, []);

      function fetchData() {

        console.log(token);
           try {
              axios.get('https://dashboard.allarabinusa.com/api/v1/en/profile', {
                headers: { 'Authorization': `Bearer ${token}` }
              }).then((response) => response.data).then(data => setData(data.data));
    
            } 
            catch (error) {
              console.log(error);
            };
        }

    return(
        <>
        <div className={style.mainProfile}>
             <div className={`container pt-5`}>
                <div className="row justify-content-center">
                    <LeftImage Data = {Data} token = {token} setData = {setData} setShowFavourite = {setShowFavourite} setShowSave = {setShowSave}/>
                    <RightInfo Data = {Data} token = {token} setData = {setData}/>
                </div>
            </div>
        </div>
       
        </>
    );
}

export default ProfileInfo;