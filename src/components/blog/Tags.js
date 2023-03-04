import React from "react";
import style from "../../assets/style/Blog.module.css";

function Tags() {
  return (
    <div className={style.TagContainer}>
      <h3>Tags </h3>
      <div className={style.TagContainerDiv}>
          <div className={style.tagDiv}>
            <p>#text</p>
          </div>
          <div className={style.tagDiv}>
            <p>#text</p>
          </div>

          <div className={style.tagDiv}>
            <p>#text</p>
          </div>
          <div className={style.tagDiv}>
            <p>#text</p>
          </div>
        </div>
      </div>
  );
}

export default Tags;
