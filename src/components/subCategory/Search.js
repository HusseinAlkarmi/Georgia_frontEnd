import { React } from "react";
import style from "../../assets/style/SubCategory.module.css";

function Search(props) {
  return (
    <div className={style.searchField}>
      <i className={`fas fa-search ${style.searchIcon}`}></i>
      <input
        type="search"
        placeholder="What are you looking for..."
        onChange={props.handleChange}
        // value={props.searchField}
      />
    </div>
  );
}
export default Search;
