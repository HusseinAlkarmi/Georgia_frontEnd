import React from "react";
import Hero from "./homeComponents/hero/Hero";
import About from "./homeComponents/about/AboutHome";
import TryApp from "./homeComponents/tryApp/TryApp";
import CategoryList from "./homeComponents/category/CategoryList";
import Blog from "./homeComponents/blog/Blog";
import Job from "./homeComponents/jobs/Jobs";




function Home() {

    const handleChangePage = () => {
        window.scrollTo(0, 0);
      }

    return(
        <>
        <Hero/>
        <About/>
        <CategoryList/>
        <Job handleChangePage = {handleChangePage}/>
        <Blog/>
        <TryApp/>
        </>

    );

}

export default Home;