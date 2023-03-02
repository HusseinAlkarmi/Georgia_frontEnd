import React from "react";
import style from "../../../assets/style/homePage/blog.module.css";

function BlogCard(props){
  
    
    return(
        <>
        {/* <div key={props.id} className={`col-sm-12 col-md-6 col-lg-4 ${style.card}`}>
            <div className={style.cardBody}>

            <div className={`row ${style.blogArticle}`}>
                 <h1 className={style.blogDisc}>{props.name}</h1>
            </div>

            </div>
        </div> */}

<div key={props.id} className={`col-sm-12 col-md-6 col-lg-4 ${style.card}`}>
            <div className={style.cardBody}>

            <div className={`row ${style.imgDiv}`}>
                <img className={style.img} src={props.image} alt={`about ${props.title}`} />
            </div>

            <div className={`row ${style.aboutArticle}`}>
                 <h1 className={style.aboutDisc}>{props.description}</h1>
                 {/* <p className={style.description}>{props.description}</p> */}
            </div>

            </div>
        </div>
        </>

    );
}

export default BlogCard;