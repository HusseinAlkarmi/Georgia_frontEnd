import React, { useState } from "react";
import style from "../../assets/style/Blog.module.css";
import useAxios from "../../hooks/useAxios";

function EventCards(props) {
  const [Data] = useAxios("en/blogs");
  const latest_post = Data?.data?.evens;

  return (
    <>
      <div className={` pt-3 ${style.eventContainer}`}>
        <h3>Latest Posts</h3>
        {latest_post?.map((data) => (
          <div key={data.id} className={`${style.eventColCardDiv} row pt-3`}>
            <div className={`col-5 ${style.leftEventext}`}>
              <p>{data.title}</p>
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
