import React from "react";
import useFetch from "../../hooks/useFetch";
import style from '../../assets/style/marketProfile.module.css';

function Favorite_Contact() {

  return (
   <div className={`mt-4 ${style.FavoriteContactContainer}`}>
    <p className="px-3">Add to Favorite </p>
    <p className="px-3"><i className="fas fa-phone-alt"></i> +962 777-777-888</p>
    <p className="px-3"><i className="fas fa-envelope-open-text"></i> mailto:lorem@gmail.com</p>
   </div>
  );
}
export default Favorite_Contact;
