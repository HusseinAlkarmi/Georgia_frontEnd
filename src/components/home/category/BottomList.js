import React, { Component } from "react";
import Slider from "react-slick";
import style from "../../../assets/style/homePage/categoryList.module.css";
import CategoryCard from "./CategoryCard";
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export default class AutoPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch("https://dashboard.allarabinusa.com/api/v1/en/main-categories")
      .then((response) => response.json())
      .then((data) => data.data)
      .then((data) => data.business)
      .then((users) =>
        this.setState(() => {
          return { list: users };
        })
      );
  }

  render() {
    const CardList = this.state.list.map((item) => (
      <Link
        to={`/Category/${item.id}?Page=Service`}
        className={style.navLink}
        onClick={this.props.handleChangePage}
      >
        <CategoryCard
          key={item.id}
          name={item.name}
          id={item.id}
          image={item.image}
        />
      </Link>
    ));

    const slidesToShowNum = Math.round(CardList.length / 1.5);
    // console.log(Math.round(CardList.length / 1.5));
    if (slidesToShowNum > 6) {
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
      rtl: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>{CardList}</Slider>
      </div>
    );
  }
}
