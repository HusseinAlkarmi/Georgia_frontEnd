import React from "react";
import style from "../../assets/style/Blog.module.css";
import useFetch from "../../hooks/useFetch";
import ScrollButton from './ScrollButton';
function LastCards() {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const BlogCardsData = Data.slice(0, 4);
  return (
    <div className={`${style.lastCardContainer}`}>

      <div className={style.cardSectionRow}>
        {BlogCardsData.map((item) => (
          <div className={style.lastCardDiv}>
            <div>
              <h3>lorem </h3>
              <p>loremmmmm</p>
            </div>
            <div className={style.lastCardImg}>
              <img src={require("../../assets/Images/blog/firstBlog.png")} />
            </div>
          </div>
        ))}
      </div>
      <div class={style.cardButton}>
        <button>View More</button>
      </div>
    </div>
  );
}

export default LastCards;
