import React, { Component } from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import style from "../../../assets/style/homePage/categoryList.module.css";
import CategoryCard from "./CategoryCard";
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {

        // const [Data] = useAxios("en/main-categories");
        // const BlogCardsData = Data?.data?.service;
        // console.log(BlogCardsData);

        // const BlogCards = BlogCardsData;
        // console.log(BlogCards);

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
      
      // export default class AutoPlay extends Component {
      //   constructor(props) {
      //     super(props);
      //     this.state = {
      //       list: [],
      //     };
      //   }
      
      //   // const [Data] = useAxios("en/main-categories");
      //   // const BlogCardsData = Data?.data?.service;
      //   // console.log(BlogCardsData);
      //   componentDidMount() {
      //     // fetch("https://dashboard.allarabinusa.com/api/v1/en/main-categories")
      //     //   .then((response) => response.json())
      //     //   .then((data) => data.data)
      //     //   .then((data) => data.service)
      //     //   .then((users) =>
      //     //     this.setState(() => {
      //     //       return { list: users };
      //     //     })
      //     //   );
          
      //   }
      
      //   render() {
      //     const CardList = this.state.list.map((item) => (
      //       <Link
      //         to={`/Category/0?Page=Shop`}
      //         className={style.navLink}
      //         onClick={this.props.handleChangePage}
      //       >
      //         <CategoryCard
      //           key={item.id}
      //           name={item.name}
      //           id={item.id}
      //           image={item.image}
      //         />
      //       </Link>
      //     ));
      
      //     let slidesToShowNum = Math.round(CardList.length / 1.5);
      //     console.log(Math.round(CardList.length / 1.5));
      
      //     if (slidesToShowNum > 6) {
      //       slidesToShowNum = 6;
      //     }
      
      //     const settings = {
      //       infinite: true,
      //       slidesToShow: slidesToShowNum,
      //       slidesToScroll: 1,
      //       autoplay: true,
      //       speed: 3000,
      //       autoplaySpeed: 10,
      //       cssEase: "linear",
      //       pauseOnHover: true,
      //       rtl: true,
      //       nextArrow: <SampleNextArrow />,
      //       prevArrow: <SamplePrevArrow />,
      //     };
      //     return (
      //       <div>
      //         <Slider {...settings}>{CardList}</Slider>
      //       </div>
      //     );
      //   }
      // }
      

      export default function AutoPlay(props) {
        const [list, setList] = useState([]);
      
        // const [Data] = useAxios("en/main-categories");
        // const BlogCardsData = Data?.data?.service;
        // console.log(BlogCardsData);

        useEffect(() => {
          fetch("https://dashboard.allarabinusa.com/api/v1/en/main-categories")
            .then((response) => response.json())
            .then((data) => data.data)
            .then((data) => data.business)
            .then((users) => setList(users));
        }, []);
      
        const CardList = list.map((item) => (
          <Link
            to={`/Category/${item.id}?Page=Shop`}
            className={style.navLink}
            onClick={props.handleChangePage}
          >
            <CategoryCard key={item.id} name={item.name} id={item.id} image={item.image} />
          </Link>
        ));
      
        let slidesToShowNum = Math.round(CardList.length / 1.5);
        // console.log(Math.round(CardList.length / 1.5));
      
        if (slidesToShowNum > 6) {
          slidesToShowNum = 6;
        }
      
        const settings = {
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
          prevArrow: <SamplePrevArrow />,
        };
      
        return (
          <div>
            <Slider {...settings}>{CardList}</Slider>
          </div>
        );
      }