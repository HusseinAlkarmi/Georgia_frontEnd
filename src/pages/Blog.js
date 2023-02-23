import React, { useState, useEffect } from "react";
import BlogHeader from "../components/blog/BlogHeader";
import BlogLetter from "../components/blog/BlogLetter";
import BlogCards from "../components/blog/BlogCards";
import ColumnCards from "../components/blog/ColumnCards";
import BlogSearch from "../components/blog/BlogSearch";
import EventCards from "../components/blog/EventCards";
import Tags from "../components/blog/Tags";
import LastCard from "../components/blog/LastCards";
import ScrollButton from "../components/blog/ScrollButton";
import style from "../assets/style/Blog.module.css";

function BlogPage() {
  // const [rightFixed, setRightFixed] = useState(false);

  // const changePosition = () => {
  //   if (window.scrollY >= 500 && window.scrollY <= 1500) {
  //     setRightFixed(true);
  //   } else {
  //     setRightFixed(false);
  //   }
  // };
  // window.addEventListener('scroll',changePosition);

  return (
    // <div className={style.blogPageStyle}>
    //   <BlogHeader />
    //   <div className={`container`}>

    //     <div className="row">
    //       <div className={`col-lg-7 col-md-12 col-sm-12 pt-4 `}>
    //         <BlogLetter />
    //         <BlogCards />
    //         <ColumnCards />
    //       </div>
    //       {/* <div className={`col-lg-5 col-md-12 col-sm-12 pt-4 ${rightFixed ? style.rightSectionFixed : `` }` }> */}
    //       <div className={`col-lg-5 col-md-12 col-sm-12 pt-4`}>
    //         <BlogSearch />
    //         <div className={` pt-3`}>
    //           <EventCards />
    //           <Tags />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <ScrollButton />

    //   <div className={`${style.lastSectionContainer} pt-5`}>
    //     <LastCard />
    //   </div>
    // </div>

    <div className={style.blogPageStyle}>
      <BlogHeader />

      <div className={`${style.firstConBackground}`}>
        <div className={`container`}>
          <div className="row">
            <div
              className={`col-lg-7 col-md-12 col-sm-12 ${style.blogLetterPaddingTop}`}
            >
              <BlogLetter />
            </div>

            {/* <div className={`col-lg-5 col-md-12 col-sm-12 pt-4 ${rightFixed ? style.rightSectionFixed : `` }` }> */}
            <div className={`col-lg-5 col-md-12 col-sm-12 pt-4`}>
              <BlogSearch />
              <div className={` pt-3`}>
                <EventCards />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.secondConBackground}`}>
      <div className={`container`}>
        <div className="row">
          <div className={`col-lg-7 col-md-12 col-sm-12`}>
            <BlogCards />
          </div>

          {/* <div className={`col-lg-5 col-md-12 col-sm-12 pt-4 ${rightFixed ? style.rightSectionFixed : `` }` }> */}
          <div className={`col-lg-5 col-md-12 col-sm-12 pt-3`}>
            <Tags />
          </div>
        </div>
      </div>
      </div>

      <div className={`${style.lastConBackground}`}>
      <div className={`container`}>
        <div className="row">
          <div className={`col-lg-7 col-md-12 col-sm-12 pt-4 `}>
            <ColumnCards />
          </div>
        </div>
      </div>
      <ScrollButton />

      <div className={`${style.lastSectionContainer} pt-5`}>
        <LastCard />
      </div>
    </div>
    </div>

  );
}
export default BlogPage;
