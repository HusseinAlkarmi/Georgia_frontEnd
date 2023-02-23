import React from "react";
import style from "../../assets/style/Blog.module.css";

function Tags() {
  return (
    <div>
      <h3>Tags </h3>
      <div className="row">
        <div className="col-lg-6">
          <div className={style.tagDiv}>
            <p>text</p>
          </div>
          <div className={style.tagDiv}>
            <p>text</p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className={style.tagDiv}>
            <p>text</p>
          </div>
          <div className={style.tagDiv}>
            <p>text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tags;
