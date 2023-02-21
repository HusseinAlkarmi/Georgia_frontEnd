import React from "react";
import cardStyle from "./card.module.css";
import Card from "./Card"
import RentCard from "./RentCard"
import {useState} from "react";

import useFetch from "../../../../hooks/useFetch";

function CardSection({index, rentPopUp, jobPopUp, setJobPopUp, setRentPopUp}){
    
    const [popId, setPopId] = useState();
    

    const[Data] = useFetch('https://jsonplaceholder.typicode.com/users');

    const Cards = Data.slice(0, 6);

    return(

        <>
        <div className="">
            <div className={`row d-flex justify-content-end ${cardStyle.post_row}`}>  
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <button className={`w-100 ${cardStyle.btn_post}`}>Post a job</button>
                </div>
            </div>

            <div className={`row pb-5 ${cardStyle.main_card_section}`}>

            {index == "Rent" ?  
                Cards.map((item, index)=> (
                        <RentCard setPopId={setPopId} id = {item.id} key={item.id} title = "Rent" name={item.name}/>
                ))   :  
                Cards.map((item, index)=> (
                        <Card setPopId={setPopId} id = {item.id} key={item.id} title = "Job" name={item.name}/>
            ))  }
          

            </div>

        </div>
        </>
    );
}

export default CardSection;