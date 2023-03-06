import React from "react";
import style from "../../assets/style/Blog.module.css";
import useAxios from "../../hooks/useAxios";

function ColumnCards(props) {
  const [Data] = useAxios("en/blogs");
  const around_georgia = Data?.data?.around_georgia;

  return (
    <>
    <h2 className={style.popularHeader}>popular</h2>
    <div className={`${style.columnCardsContainer} pt-4`}>
      {around_georgia?.map((item) => (
        <div key={item.id} className={style.columnCardsContainerDiv}>
          <div className={style.colCardImg}>
            <img src={require("../../assets/Images/blog/Georgia.png")} />
          </div>
          <div className={style.paragraph}>
            <h5>{item.title} </h5>
            <p>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </>
  );
}

export default ColumnCards;
