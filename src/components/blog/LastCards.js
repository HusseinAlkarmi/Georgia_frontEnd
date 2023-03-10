import React from "react";
import style from "../../assets/style/Blog.module.css";
import useFetch from "../../hooks/useFetch";
import ScrollButton from "./ScrollButton";
function LastCards() {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const BlogCardsData = Data.slice(0, 4);
  return (
    <>
     
      <div className={`${style.lastSectionContainer}`}>
      <div className={`${style.lastCardContainer}`}>
      <h2 className={style.placesHeader}>places to visit</h2>
        <div className={style.blogCardContainer}>
          {BlogCardsData.map((item) => (
            <div key={item.id} className={style.cardImg}>
              <div className={style.cardImageDiv}>
                <img
                  src={require(`../../assets/Images/subCategory/category_img.png`)}
                />
              </div>
              <div className={style.cardText}>
                <h5>Some Title here </h5>
                <p>Lorem ipsum dolor sit amet, consectetur ..</p>
              </div>
            </div>
          ))}
        </div>
        <div className={style.cardButton}>
          <button>View More</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default LastCards;
