import React from "react";
import SearchForm from "./searchForm/SearchForm";
import style from "./searchForm/search.module.css";
import CardSection from "./cardJob/CardSection";


function JobBody(){
    return(
        <>
        <div className={style.jobBody}>
            <SearchForm/>
            <CardSection/>
            
        </div>
        </>
    );
}
export default JobBody;