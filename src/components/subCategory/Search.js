import { React } from "react";
import style from './SubCategory.module.css';

function Search(props) {
  return (
    <div className={style.searchField}>
      <input
        type="search"
        placeholder="Search"
        onChange={props.handleChange}
        value={props.searchField}
      />
    </div>
  );
}
export default Search;
