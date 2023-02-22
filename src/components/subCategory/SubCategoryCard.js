import React from "react";
import style from "../../assets/style/SubCategory.module.css";
import useFetch from "../../hooks/useFetch";

function SubCategoryCard(props) {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const categoryCards = Data.slice(0, 9);
  
  
  return (
    <div className="pt-3">
      <h1 className={style.categoryTitle}>ALL</h1>

      <div className={style.cardContainer}>
        {categoryCards.map((item) => (
          <div className={style.card}>
            <img src={require(`../../assets/Images/subCategory/category_img.png`)} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SubCategoryCard;
