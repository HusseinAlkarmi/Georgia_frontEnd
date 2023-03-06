import React from "react";
import style from "../../assets/style/marketProfile.module.css";

function OfferComponent({ data }) {
  return (
    <div className="mt-5">
      <div className={style.offerSection}>
        <h2 className={style.offerTitle}>What we offer? </h2>
        {data?.offers.map((item) => (
          <div key={item.id} className={style.offerCards}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OfferComponent;
