import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import style from "../../assets/style/SubCategory.module.css";

function CategoryHeader(props) {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const CategoryHeader = Data.slice(0, 1);

  return (
    <div className={`${style.categoryContainer} pt-3`}>
      {CategoryHeader.map((item) => (
        <>
          <img  src={require(`../../assets/Images/subCategory/${item.id}_categoryHeader.png`)} />
            <h1>{item.name}</h1>
        </>
      ))}
    </div>
  );
}
export default CategoryHeader;
