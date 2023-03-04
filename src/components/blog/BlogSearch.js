import React from "react";
import style from "../../assets/style/Blog.module.css";

function BlogSearch(props) {
  return (
    <div className={style.searchContainer}>
      <div className={style.blogSearchField}>
        <i className={`fas fa-search ${style.searchIcon}`}></i>
        <input
          type="search"
          placeholder="What are you looking for..."
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

export default BlogSearch;
