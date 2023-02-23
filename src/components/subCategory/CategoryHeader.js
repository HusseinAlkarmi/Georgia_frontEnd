import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import style from "../../assets/style/SubCategory.module.css";
import Search from './Search'
function CategoryHeader(props) {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const CategoryHeader = Data.slice(0, 1);

  return (
    <div className={`${style.categoryContainer} pt-3`}>
      {CategoryHeader.map((item) => (
        <div key={item.id}>
          <img  src={require(`../../assets/Images/subCategory/${item.id}_categoryHeader.png`)} />
           <div>
            <h1>{item.name}</h1>
            <Search />
            </div>
        </div>
      ))}
    </div>
  );
}
export default CategoryHeader;
