import React from "react";
import style from '../../assets/style/job_rent/card.module.css';
import Card from "./Card"
import RentCard from "./RentCard"
import {useState} from "react";
import PopUpRent from './PopUpRent';
import PopUpJob from './PopUpJob';

import useFetch from "../../hooks/useFetch";

function CardSection({index, showModal, setShowModal, rentPopUp, jobPopUp, setJobPopUp, setRentPopUp}){
    
    const [popRentInfo, setPopRentInfo] = useState({id: 0, name: ''});
    const [popJobInfo, setPopJobInfo] = useState({id: 0, name: ''});
    

    const[Data] = useFetch('https://jsonplaceholder.typicode.com/users');

    const Cards = Data.slice(0, 6);

    function closeModal(){
      document.body.style.overflow = 'auto';
      setRentPopUp(false);
      setJobPopUp(false);
      setShowModal(false);
    }
    return(

        <>
        <div className="">
            <div className={`row d-flex justify-content-end ${style.post_row}`}>  
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <button className={`w-100 ${style.btn_post}`}>Post a job</button>
                </div>
            </div>

            <div className={`row pb-5 ${style.main_card_section}`}>

            {index === "Rent" ?  
                Cards.map((item, index)=> (
                        <RentCard setShowModal = {setShowModal} setRentPopUp ={setRentPopUp} popRentInfo = {popRentInfo} setPopRentInfo={setPopRentInfo} id = {item.id} key={item.id} title = "Rent" name={item.name}/>
                ))   :  
                Cards.map((item, index)=> (
                        <Card setShowModal = {setShowModal} setJobPopUp={setJobPopUp} popJobInfo = {popJobInfo} setPopJobInfo={setPopJobInfo} id = {item.id} key={item.id} title = "Job" name={item.name}/>
            ))  }
          
          {showModal && (
              <div className={style.modalSection}>
                <div className={style.closeModalDiv}>
                <button className={`closeBtnModal`} onClick={closeModal}><i className={`fas fa-times ${style.closeModalBtn}`}></i></button>
                </div>
                {rentPopUp?
                  <PopUpRent popRentInfo={popRentInfo} />:
                  <PopUpJob  popJobInfo={popJobInfo}/>
                }

              </div>

      )}

            </div>

        </div>
        </>
    );
}

export default CardSection;