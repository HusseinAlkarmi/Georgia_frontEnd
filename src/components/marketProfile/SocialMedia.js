import React from "react";
import style from "../../assets/style/marketProfile.module.css";
function socialMedia({ data }) {
  return (
    <div className={`${style.socialMediaSection} mt-5`}>
      <h2>Follow us </h2>
      <div className={`${style.socialMediaIcon} col-2 mt-3`}>
        <a href={data?.twitter_link}>
          <i className="fab fa-twitter"></i>
        </a>
        <a href={data?.facebook_link}>
          <i className="fab fa-facebook-f"></i>
        </a>

        <a href={data?.instagram_link}>
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}
export default socialMedia;
