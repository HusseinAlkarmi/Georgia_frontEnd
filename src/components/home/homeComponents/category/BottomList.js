import React, { Component } from "react";
import Slider from "react-slick";
import style from './categoryList.module.css'
import CategoryCard from "./CategoryCard";

function SampleNextArrow(props) {
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
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState(
          () => {
            return {list: users}
          }
           )
           );
      }


  render() {
    const CardList = this.state.list.map(item =>  
      <CategoryCard key={item.id} name = {item.name} id = {item.id}/>
      )

    const settings = {
    //   dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 10,
      cssEase: "linear",
      pauseOnHover: true,
      rtl: false,
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