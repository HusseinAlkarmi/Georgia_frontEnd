import React from "react";
import style from '../../assets/style/marketProfile.module.css';


function Cards({data}) {

  return (
    <div className={`${style.cardSection} mt-3` }> 
      
          {data?.gallery?.map(item=> (
          <div className={style.cardContainer} key={item.id} >
            <img src={item.image} className="mr-2" />  
          </div>
          ))}
    </div>
  );
}
export default Cards;
