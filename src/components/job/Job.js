import React from "react";
import JobHead from "./components/jobHead/JobHead";
import SubNav from "./components/jobNav/JobNav";
import SearchForm from "./components/searchForm/SearchForm";
import CardSection from "./components/cardJob/CardSection";
import style from './components/jobNav/jobNav.module.css';


function Job(){
    return(
        <>
        <JobHead/>

        <div className={style.jobBody}>
        <SubNav/>
        <SearchForm/>
        <CardSection/>
        </div>
        </>
    );
}

export default Job;