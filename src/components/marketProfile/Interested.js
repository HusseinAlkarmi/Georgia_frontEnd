import React from "react";
import useFetch from "../../hooks/useFetch";
import style from '../../assets/style/marketProfile.module.css';

function Interested() {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const Cards = Data.slice(0, 3);
  return (
  <div className={`${style.mainSection} row`}>
    <div className={`${style.subLastSection} col-10 mt-5`}>
      <h2 className={`mt-5 pb-3 ${style.interestedTitle}`}>You may also be interested in  </h2>
      <div className={`${style.lastSection}`}>
        {Cards.map((item) => (
          <div key={item.id}  className={`col-4 ${style.interestedCardContainer}`}>
            <img src={require(`../../assets/Images/marketProfile/1_marketing.png`)} />
            <p className={style.interested}>test</p>
          </div>
        ))}
      </div>
     </div>
    </div>

  );
}
export default Interested;
