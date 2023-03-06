import React from "react";
import style from "../../assets/style/Blog.module.css";
import useAxios from "../../hooks/useAxios";

function BlogCards(props) {
  const [Data] = useAxios("en/blogs");
  const BlogCardsData = Data?.data?.statistics;
  return (  
    <>
     <h2 className={style.statisticsHeader}>statistics</h2>
      <div className={style.blogCardContainer}>
        {BlogCardsData?.map((item) => (
          <div key={item.id} className={style.cardImg}>
            <div className={style.cardImageDiv}>
              <img
                src={require(`../../assets/Images/subCategory/category_img.png`)}
              />
            </div>
            <div className={style.cardText}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={style.cardButton}>
        <button>View More</button>
      </div>
    </>
  );
}

export default BlogCards;
