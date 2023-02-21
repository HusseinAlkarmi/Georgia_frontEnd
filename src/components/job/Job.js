import React from "react";
import JobHead from "./components/jobHead/JobHead";
import SubNav from "./components/jobNav/JobNav";
import SearchForm from "./components/searchForm/SearchForm";
import SearchFormRent from "./components/searchForm/SearchFormRent";
import CardSection from "./components/cardJob/CardSection";
import style from './components/jobNav/jobNav.module.css';
import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";


function Job(){

    const {type} = useParams();

    const [index, setIndex] = useState(type);
    
    const [jobPopUp, setJobPopUp] = useState(false);
    const [rentPopUp, setRentPopUp] = useState(false);
    // console.log(index);



    return(
        <>
        <JobHead/>

        <div className={style.jobBody}>
        <SubNav index = {index} setIndex = {setIndex}  setJobPopUp={setJobPopUp} setRentPopUp={setRentPopUp}/>
        {index == "Rent"? <SearchForm/>: <SearchFormRent/>}
        {/* {index == "Rent"? <CardSection index = {index}/>: <CardSection index = {index}/>} */}
        <CardSection index = {index} rentPopUp={rentPopUp} jobPopUp = {jobPopUp} setJobPopUp={setJobPopUp} setRentPopUp={setRentPopUp}/>
             

        
     
        </div>
        </>
    );
}

export default Job;