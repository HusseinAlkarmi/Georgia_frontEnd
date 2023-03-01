import React from "react";
import style from "./blog.module.css";
import BlogCard from "./BlogCard";
import { useState , useEffect } from "react";




function Blog(){

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        // This code will run when the component mounts
        fetchData();
      }, []);

      function fetchData() {
        // Use fetch or any other method to fetch data
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setBlog(data.slice(0,3)))
          .catch(error => console.log(error));
      }

      let cards = blog.map(item =>
        <BlogCard key={item.id} name = {item.name} id = {item.id}/>
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