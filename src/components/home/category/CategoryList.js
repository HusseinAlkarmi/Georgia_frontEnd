import React from "react";
import style from "../../../assets/style/homePage/categoryList.module.css";
import TopList from "./TopList";
import BottomList from "./BottomList";
import { Link } from "react-router-dom";

function CategoryList() {
  const handleChangePage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={style.mainCategoryDiv}>
        <div className={`container ${style.container}`}>
          <h1 className={style.categoryTitle}>Category List</h1>
          <TopList handleChangePage={handleChangePage} />
          <Link
            to="/Category/0?Page=Shop"
            className={style.seeAllBtn}
            onClick={handleChangePage}
          >
            See all
          </Link>
          <h1 className={style.categoryTitle}>Service List</h1>
          <BottomList handleChangePage={handleChangePage} />
          <Link
            to="/Category/0?Page=Service"
            className={style.seeAllBtn}
            onClick={handleChangePage}
          >
            See all
          </Link>
        </div>
      </div>
    </>
  );
}

export default CategoryList;
