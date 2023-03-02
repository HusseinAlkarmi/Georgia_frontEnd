import React from "react";
import { useState , useEffect } from "react";
import style from "../../../assets/style/homePage/blog.module.css";
import BlogCard from "./BlogCard";



function Blog({blogData}){

    // const [blog, setBlog] = useState([]);
    // useEffect(() => {
    //     fetchData();
    //   }, []);
    //   function fetchData() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //       .then(response => response.json())
    //       .then(data => setBlog(data.slice(0,3)))
    //       .catch(error => console.log(error));
    //   }

      let cards = blogData?.map(item =>
        <BlogCard key={item.id} description = {item.description} image = {item.image} title = {item.title} id = {item.id}/>
      )

    

    return(
        <>
        <div className={style.mainDiv}>

        <div className="container">
        <h1 className={style.blogTitle}>Blog</h1>
            <div className={`row ${style.cardsRowCenter}`}>
              {cards}
            </div>
        </div>

        </div>
        </>
    );
}

export default Blog;