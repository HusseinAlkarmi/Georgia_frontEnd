import React from "react";
import style from "./blog.module.css";


function BlogCard(props){
    // let data = props.blog.map((item, index) => (
    //     <h1>{item.name}</h1>))
    
    return(
        <>
        {/* {data} */}
        <div key={props.id} className={`col-sm-12 col-md-6 col-lg-4 ${style.card}`}>
            <div className={style.cardBody}>


            <div className={`row ${style.blogArticle}`}>
                 <h1 className={style.blogDisc}>{props.name}</h1>
            </div>

            </div>
        </div>
        </>

    );
}

export default BlogCard;