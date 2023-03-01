import React from "react";
import useFetch from "../../hooks/useFetch";
import style from '../../assets/style/marketProfile.module.css';


function Cards() {
const[Data] = useFetch('https://jsonplaceholder.typicode.com/users');
const Cards = Data.slice(0, 6);
  return (
    <div className={`${style.cardSection} mt-3` }> 
      {
          Cards.map(item=> (
          <div className={style.cardContainer} key={item.id} >
            <img src={require(`../../assets/Images/marketProfile/1_marketing.png`)} className="mr-2" />  
          </div>
          ))  
        }
    </div>
  );
}
export default Cards;
