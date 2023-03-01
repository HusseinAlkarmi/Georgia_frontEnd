import React from "react";
import style from "../../assets/style/SubCategory.module.css";
import useFetch from "../../hooks/useFetch";

function SubCategoryCard(props) {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const categoryCards = Data.slice(0, 9);
 
  
  return (
    <div className="pt-4">
      <h1 className={style.categoryTitle}>ALL</h1>

      <div className={props.displayComponent? style.cardContainer : style.cardServiceContainer}>
        {categoryCards.map((item) => (
          <div key={item.id} className={ props.displayComponent? style.card : style.cardService } >
            <img src={require(`../../assets/Images/subCategory/category_img.png`)} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SubCategoryCard;
