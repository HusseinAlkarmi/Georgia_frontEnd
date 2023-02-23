import React from "react";
import style from "../../assets/style/Blog.module.css";
import useFetch from "../../hooks/useFetch";

function BlogHeader(props) {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const BlogHeaderData = Data.slice(0, 1);

  return (
    <div className={`${style.blogContainer} pt-3`}>
      {BlogHeaderData.map((item) => (
        <>
          <img
            src={require(`../../assets/Images/blog/night.png`)}
          />
          <h1>{item.name}</h1>
        </>
      ))}
    </div>
  );
}

export default BlogHeader;
