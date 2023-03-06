import { useState } from "react";
import style from "../../../assets/style/navbar/navBar.module.css";

function NavSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className={style.searchBox}>
        <input
          className={style.searchText}
          type="text"
          placeholder="Search Anything"
          onChange={handleSearchInput}
        />
        <a href="#" className={style.searchBtn}>
          <i className="fas fa-search"></i>
        </a>
      </div>
    </>
  );
}

export default NavSearch;
