import React from "react";
import style from "../../assets/style/Blog.module.css";
import useFetch from "../../hooks/useFetch";

function ColumnCards(props) {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const CardsData = Data.slice(0, 3);

  return (
    <div className={`${style.columnCardsContainer}`}>
      {CardsData.map((item) => (
        <div className={style.columnCardsContainerDiv}>
          <div className={style.colCardImg}>
            <img src={require("../../assets/Images/blog/Georgia.png")} />
          </div>
          <div className={style.paragraph}>
            <h5>Some Title here </h5>
            <p>
              Lorem Lorem Lorem Lorem Lorem Lorem LoremL Lorem LoremLoremL Lorem
              Lorem LoremL Lorem Lorem LoremL Lorem Lorem LoremL Lorem Lorem
              LoremL
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColumnCards;
