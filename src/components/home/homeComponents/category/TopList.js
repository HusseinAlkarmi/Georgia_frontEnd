import React, { Component } from "react";
import Slider from "react-slick";
import style from './categoryList.module.css'
import CategoryCard from "./CategoryCard";
import useAxios from "../../../../hooks/useAxios";

function SampleNextArrow(props) {

  // const [Data] = useAxios("en/main-categories");
  //       const BlogCardsData = Data.data;
  //       const BlogCards = BlogCardsData;
  //       console.log(BlogCards);

    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }

  
export default class AutoPlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        };
    }


    componentDidMount(){

        fetch('https://dashboard.allarabinusa.com/api/v1/en/main-categories')
        .then(response => response.json())
        .then(data => data.data)
        .then(data => data.service)
        .then(users => this.setState(
          () => { return {list: users}}
           ));

    
      }


  render() {
    const CardList = this.state.list.map(item =>  
      <CategoryCard key={item.id} name = {item.name} id = {item.id} image = {item.image}/>
      )

      let slidesToShowNum = Math.round(CardList.length / 1.5);
            console.log(Math.round(CardList.length / 1.5));

      if(slidesToShowNum > 6){
        slidesToShowNum = 6;
      }


    const settings = {
    //   dots: true,
      infinite: true,
      slidesToShow: slidesToShowNum,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 10,
      cssEase: "linear",
      pauseOnHover: true,
      rtl: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        
        <Slider {...settings}>
              {CardList}
        </Slider>
      </div>
    );
  }
}