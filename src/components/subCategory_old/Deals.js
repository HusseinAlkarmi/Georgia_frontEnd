import React,{useEffect, useState}  from "react";
import DealsCard from './DealsCard';
import axios from 'axios';
import style from './SubCategory.module.css';

function Deals(props) {
    const [DealsCards, setDealsCards] = useState([]);

  useEffect(() => {
    getCategoryData();
  });

  const getCategoryData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        setDealsCards(response.data.slice(0, 3));
    });
  };


  const dealsCardsData = DealsCards.map((item) => (
    <DealsCard name={item.name} id={item.id}/>
  ));
  return (
  <div className={style.firstContainer}>
     <h1 className={style.dealsTitle}>DEALS</h1>
   <div className={style.dealsContainer}>
      {dealsCardsData}
   </div>
   </div>
  );
}
export default Deals;
