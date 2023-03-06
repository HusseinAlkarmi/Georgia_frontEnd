import React from "react";
import useFetch from "../../hooks/useFetch";
import style from '../../assets/style/marketProfile.module.css';

function Galllery({data}) {
  return (
      <div className={`${style.rightCards} `}>
        {data?.gallery?.map((item) => (
          <div className={style.rightCardsContainer} key={item.id}>
          <img src={item.image} alt={item.id} />
          </div>
        ))}
      </div>
  );
}
export default Galllery;
