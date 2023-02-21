import React, { useState, useEffect } from "react";
import SubCategoryCard from './SubCategoryCard';
import axios from "axios";
import style from './SubCategory.module.css';
import Search from "./Search";

function SubCategoryCards(props) {
  const [CategoryCards, setCategoryCards] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    getCategoryData();
  });

  const getCategoryData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        setCategoryCards(response.data.slice(0, 9));
    });
  };

  function handleChange(event) {
    setSearchField(event.target.value);
    console.log(searchField);
  }

  const filteredCategory = CategoryCards.filter((category) =>
    category.name.includes(searchField)
  );

  const categoryCardsData = filteredCategory.map((item) => (
    <SubCategoryCard name={item.name} id={item.id}/>
  ));
  return(
    <>
    <Search handleChange={handleChange} />
    <div className={style.cardContainer}>{categoryCardsData}</div>
    </>
  );
}
export default SubCategoryCards;
