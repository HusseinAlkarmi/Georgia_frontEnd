import React from "react";
import BottomProfile from "../components/userProfile/BottomProfile";
import ProfileInfo from "../components/userProfile/ProfileInfo";
// import { useParams } from "react-router-dom";
import { useState } from "react";

function Profile(){
    const [showFavourite,setShowFavourite] = useState(false);
    const [showSave,setShowSave] = useState(false);

    // const { id } = useParams();

    // console.log(id);
    
    const lan = localStorage.getItem("lang");

    console.log(lan);
    
    return(
        <>
        <ProfileInfo setShowFavourite = {setShowFavourite} setShowSave = {setShowSave}/>
        <BottomProfile showFavourite = {showFavourite} showSave = {showSave} />
        
        </>
    );
}

export default Profile;