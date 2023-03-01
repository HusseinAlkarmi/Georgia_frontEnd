import React from "react";
import useFetch from "../../hooks/useFetch";
import style from '../../assets/style/marketProfile.module.css';

function MarktingHeader(props) {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const Cards = Data.slice(0, 1);

  return (
    <div className={style.MarketingContainer}>
      {Cards.map((item) => (
        <div key={item.id} className={style.MarketingImgContainer}>
          <img
            className={style.MarketingImg}
            src={require(`../../assets/Images/marketProfile/socialMedia.png`)}
          />
          <div className={style.subHeader}>
            <img
              className={style.GlyphsImg}
              src={require(`../../assets/Images/marketProfile/Glyphs.png`)}
            />
            <div className={`${style.marketTitle} px-4 pt-3 `}>
              <h2 className={`fw-bold ${style.marketTitleSize}`}>{item.name}</h2>
            </div>
          </div>
        </div>
      ))}
      <div className={style.Marketbtn}>
        <button>Visit Website</button>
      </div>
    </div>
  );
}
export default MarktingHeader;
