import React from "react";
import Hero from "./homeComponents/hero/Hero";
import About from "./homeComponents/about/AboutHome";
import TryApp from "./homeComponents/tryApp/TryApp";
import CategoryList from "./homeComponents/category/CategoryList";
import Blog from "./homeComponents/blog/Blog";
import Job from "./homeComponents/jobs/Jobs";




function Home() {

    return(
        <>
        <Hero/>
        <About/>
        <CategoryList/>
        <TryApp/>
        <Blog/>
        <Job/>
        </>

    );

}

export default Home;