import React from "react";
import style from "../../assets/style/Blog.module.css";
import useFetch from "../../hooks/useFetch";

function ColumnCards(props) {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const CardsData = Data.slice(0, 4);

  return (
    <div className={`container ${style.columnCardsContainer}`}>
      {CardsData.map((item) => (
        <div className={`${style.secondColCardDiv} row`}>
            <div className={`${style.colCardImg} col-6`}>
            <img src={require("../../assets/Images/blog/firstBlog.png")} />
          </div>
          <div className="col-6">
            <h3>lorem </h3>
            <p>loremmmmm</p>
          </div>
          
        </div>
       ))} 
    </div>
  );
}

export default ColumnCards;
