import React from "react";
import JobHead from "../components/job_rent/JobHead";
import SubNav from "../components/job_rent/JobNav";
import SearchForm from "../components/job_rent/SearchForm";
import SearchFormRent from "../components/job_rent/SearchFormRent";
import CardSection from "../components/job_rent/CardSection";
import style from '../assets/style/job_rent/jobNav.module.css';

import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";


function Job(){

    const {type} = useParams();

    const [index, setIndex] = useState(type);
    
    const [jobPopUp, setJobPopUp] = useState(false);
    const [rentPopUp, setRentPopUp] = useState(false);
    const [showModal, setShowModal] = useState(false);
    // console.log(index);



    return(
        <>
        <JobHead/>

        <div className={style.jobBody}>
        <SubNav index = {index} setIndex = {setIndex}  setJobPopUp={setJobPopUp} setRentPopUp={setRentPopUp}/>
        {index == "Rent"? <SearchForm/>: <SearchFormRent/>}
        {/* {index == "Rent"? <CardSection index = {index}/>: <CardSection index = {index}/>} */}
        <CardSection index = {index} showModal = {showModal} setShowModal = {setShowModal} rentPopUp={rentPopUp} jobPopUp = {jobPopUp} setJobPopUp={setJobPopUp} setRentPopUp={setRentPopUp}/>
             

        
     
        </div>
        </>
    );
}

export default Job;