import React from "react";
import style from "../../assets/style/marketProfile.module.css";

function MarktingHeader({ data }) {
  return (
    <div className={style.MarketingContainer}>
      <div key={data?.id} className={style.MarketingImgContainer}>
        <img
          className={style.MarketingImg}
          src={require(`../../assets/Images/marketProfile/socialMedia.png`)}
        />
        <div className={style.subHeader}>
          <img className={style.GlyphsImg} src={data?.image} />{" "}
          <div className={`${style.marketTitle} px-4 pt-3 `}>
            <h2 className={`fw-bold ${style.marketTitleSize}`}>{data?.name}</h2>
          </div>
        </div>
      </div>
      <div className={style.Marketbtn}>
        <button>Visit Website</button>
      </div>
    </div>
  );
}
export default MarktingHeader;
