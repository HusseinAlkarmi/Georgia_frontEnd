import React from "react";
import style from "../../assets/style/Blog.module.css";
import useFetch from "../../hooks/useFetch";

function BlogLetter(props) {
    const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
    const BlogHeaderData = Data.slice(0, 1);

  return (
    <div className={`${style.blogLetterContainer}`}>
      <div className={style.paragraph} >
        <p>
          Lorem Lorem Lorem Lorem Lorem Lorem LoremL Lorem LoremLoremL
          Lorem Lorem LoremL Lorem Lorem LoremL Lorem Lorem LoremL Lorem Lorem LoremL

        </p>
      </div>
      <div className={style.imageBlogDiv}>
        <img src={require("../../assets/Images/blog/firstBlog.png")} />
      </div>
    </div>
  );
}

export default BlogLetter;
