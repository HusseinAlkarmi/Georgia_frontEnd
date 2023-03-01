import React from "react";
import useFetch from "../../hooks/useFetch";
import style from "../../assets/style/marketProfile.module.css";

function OfferComponent() {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const Cards = Data.slice(0, 9);

  return (
    <div className="mt-5">
      <div className={style.offerSection}>
        <h2 className={style.offerTitle}>What we offer? </h2>
        {Cards.map((item) => (
          <div key={item.id} className={style.offerCards}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OfferComponent;
