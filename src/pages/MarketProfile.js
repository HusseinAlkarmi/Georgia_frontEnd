import React from "react";
import Cards from "../components/marketProfile/Cards";
import Description from "../components/marketProfile/Description";
import MarktingHeader from "../components/marketProfile/MarketingHeader";
import OfferComponent from "../components/marketProfile/OfferComponent";
import style from '../assets/style/marketProfile.module.css';
import MarketingMap from "../components/marketProfile/MarketingMap";
import SocialMedia from "../components/marketProfile/SocialMedia";
import Gallery from "../components/marketProfile/Gallery";
import Section from '../components/marketProfile/Interested';
function MarketProfile() {
  return (
    <div className={style.serviceComponent}>
      <MarktingHeader />
      <div className={`${style.marketingContainerSection} container col-12`}>
        <div className="row">
          <div className={`col-lg-8 col-md-12 col-sm-12`}>
            <Description />
            <Cards />
            <OfferComponent />
            <SocialMedia />
          </div>
          <div className={`col-lg-4 col-md-12 col-sm-12 mt-5`} >
            <MarketingMap />
            <div className="mt-5">
              <div className={style.galleryTitleDiv}>
                <p className={style.galleryTitle}>Photo Gallery</p>
              </div>
              <Gallery />
            </div>
          </div>
        </div>
      </div>
      <Section/>
    </div>
  );
}
export default MarketProfile;
