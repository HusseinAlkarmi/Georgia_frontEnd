import React from "react";
import style from '../../assets/style/marketProfile.module.css';
function socialMedia() {
  return (
    <div className={`${style.socialMediaSection} mt-5`}>
      <h2>Follow us </h2>
      <div className={`${style.socialMediaIcon} col-2 mt-3`}>
      <a href="">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
   </div>
  );
}
export default socialMedia;
