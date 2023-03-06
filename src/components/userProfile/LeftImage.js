import React from "react";
import style from '../../assets/style/userProfile.module.css';
import { useState } from "react";
import useAxios from "../../hooks/useFetchPost";

function LeftImage({setShowFavourite, setShowSave, Data, setData, token}){
    const [image, setImage] = useState(Data.photo);
    const [newImage, setNewImage] = useState();

    
    
    const formData = new FormData();
    // formData.append('photo', image);

    const [res] = useAxios("en/client/profile", formData, token);

    const imageChange = (e) => {
        const image = e.target.files[0];
        const fileUrl = URL.createObjectURL(image);
        setImage(fileUrl);
        // console.log(fileUrl);
        setData({...Data, [e.target.name]: fileUrl});
        setNewImage(image);
        formData.append('photo', image);
        console.log(res);
        fetchAPI(newImage);
        // if(e.target.files[0] && e.target.files[0].size > 0){
        //     setImage(e.target.files[0]);
        // }
    }

    function fetchAPI(image){
        formData.append('photo', newImage);
    }
    // console.log(Data);

    function handleSaveClick(){
        setShowFavourite(false);
        setShowSave(true);
    }

    function handleCancelClick(){
        setShowSave(false);
        setShowFavourite(true);
    }

    return(
        <>
        <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={`col-sm-12 col-md-6 col-lg-6 d-flex ${style.leftDivImg}`}>
                <img className={style.profileImg} src={Data.photo} alt="profile picture" width={300} height={300}/>
                <label htmlFor="photo" className={style.editImageLabel}><i className="fas fa-edit"></i></label>
            </div>
            <input hidden id="photo" name="photo" type="file" accept="image/*" className="form-control" placeholder="image" onChange={imageChange}/>
            {/* {image && <img src={image} alt="Selected file" height={300}/>} */}

            <div className={`col-sm-12 col-md-6 col-lg-6 d-flex ${style.leftBtnSection}`}>
                <button className={style.favoriteBtn} onClick={handleSaveClick}>Favorite</button>
                <button className={style.savedBtn} onClick={handleCancelClick}>Saved</button>
            </div>
        </div>
        </>
    );
}

export default LeftImage;