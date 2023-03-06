import React, { useState } from "react";
import UseAxios from "../../hooks/useFetchPost";
import style from "../../assets/style/marketProfile.module.css";
import { useParams } from "react-router-dom";

function Favorite_Contact() {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const formData = new FormData();
  const token = localStorage.getItem("userToken");
  const [res] = UseAxios(`en/client/favorite/store`, id, token);
  const heartIcon = <i className="far fa-heart"></i>;
  const heartIconFilled = <i className="fas fa-heart"></i>;

  const handleButtonClick = () => {
    formData.append("id", id);
    setIsFavorite(!isFavorite);
    alert(`${id}`);
    console.log(res);
  };

  return (
    <div className={`mt-4 ${style.FavoriteContactContainer}`}>
      <p className="px-3">
        <span
          className={`favorite-icon ${isFavorite ? "active" : ""}`}
          onClick={handleButtonClick}
        >
          {isFavorite ? heartIconFilled : heartIcon}
        </span>
        Add to Favorite
      </p>
      <p className="px-3">
        <i className="fas fa-phone-alt"></i> +962 777-777-888
      </p>
      <p className="px-3">
        <i className="fas fa-envelope-open-text"></i> mailto:lorem@gmail.com
      </p>
    </div>
  );
}
export default Favorite_Contact;
