import React from "react";
import useFetch from "../../hooks/useFetch";
import style from '../../assets/style/marketProfile.module.css';

function Galllery() {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const Cards = Data.slice(0, 6);
  return (
      <div className={`${style.rightCards} `}>
        {Cards.map((item) => (
          <div className={style.rightCardsContainer} key={item.id}>
            <img src={require(`../../assets/Images/marketProfile/1_marketing.png`)} />
          </div>
        ))}
      </div>
  );
}
export default Galllery;
