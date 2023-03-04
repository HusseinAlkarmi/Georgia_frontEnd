import React, { useState } from "react";
import style from "../../assets/style/Blog.module.css";
import useFetch from "../../hooks/useFetch";

function EventCards(props) {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const EventCardsData = Data.slice(0, 2);

  return (
    <>
      <div className={` pt-3 ${style.eventContainer}`}>
        <h3>Latest Posts</h3>
        {EventCardsData.map((data) => (
          <div className={`${style.eventColCardDiv} row pt-3`}>
            <div className={`col-5 ${style.leftEventext}`}>
              <p>loremmmmm lorem lorem lorem</p>
            </div>
            <div className={`${style.rightCardImg} col-7`}>
              <img src={require("../../assets/Images/blog/firstBlog.png")} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EventCards;
