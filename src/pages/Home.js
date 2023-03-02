import React, {useEffect} from "react";
import Hero from "../components/home/hero/Hero";
import About from "../components/home/about/AboutHome";
import TryApp from "../components/home/tryApp/TryApp";
import CategoryList from "../components/home/category/CategoryList";
import Blog from "../components/home/blog/Blog";
import Job from "../components/home/jobs/Jobs";
import useAxios from "../hooks/useAxios";
function Home() {

        const [Data] = useAxios("en/home");
        const homeData = Data?.data;
        console.log(homeData);

    const handleChangePage = () => {
        window.scrollTo(0, 0);
      }

    return(
        <>
        <Hero/>
        <About aboutData = {homeData?.about}/>
        <CategoryList/>
        <Job handleChangePage = {handleChangePage}/>
        <Blog blogData = {homeData?.blogs}/>
        <TryApp/>
        </>

    );

}

export default Home;