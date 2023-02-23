import React from "react";
import style from "../../assets/style/Blog.module.css";
import useFetch from "../../hooks/useFetch";

function BlogCards(props) {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const BlogCardsData = Data.slice(0, 4);

  return (
    <>
      <div className={style.blogCardContainer}>
        {BlogCardsData.map((item) => (
          <div className={style.secondCardDiv}>
            <div>
              <h3>lorem </h3>
              <p>loremmmmm</p>
            </div>
            <div className={style.cardImg}>
              <img src={require("../../assets/Images/blog/firstBlog.png")} />
            </div>
          </div>
        ))}
      </div>
      <div class={style.cardButton}>
        <button>View More</button>
      </div>
    </>
  );
}

export default BlogCards;
