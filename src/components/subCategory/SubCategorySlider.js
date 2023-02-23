import React, {useState} from "react";
import style from "../../assets/style/subCategorySlider.module.css";

// import "../mainComponent/mainStyle.css";
import ScrollContainer from 'react-indiana-drag-scroll'
import SliderList from "./CardSlider";
function SubCategorySlider(){
    let subCategoryListTest = [{id :0 , Name : "Coffee"},{id :1, Name : "Desert"},{id :2, Name :"Bakary"}];


    let subCategoryList = subCategoryListTest.map(subCat => <SliderList name = {subCat.Name} id = {subCat.id} key = {subCat.id}/>);

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
      }

    return(
        <>

<div className={style.width_slider}  style={{position:"relative"}}>
    <ScrollContainer className="scroll-container">
    <ul className={`${style.slider_ul}`} >
            <li className={`${activeIndex === 0 ? "Active" : ""}`} onClick={() => handleClick(0)}>
                <div >
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Coffee</p>
                </div>
            </li>
         
            <li className={`${activeIndex === 1 ? "Active" : ""}`}  onClick={() => handleClick(1)}>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Desert</p>
                </div>
            </li>

            <li className={`${activeIndex === 2 ? "Active" : ""}`}  onClick={() => handleClick(2)}>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Bakery</p>
                </div>
            </li>
         
            <li className={`${activeIndex === 3 ? "Active" : ""}`}  onClick={() => handleClick(3)}>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Roastery</p>
                </div>
            </li>
         
            <li className={`${activeIndex === 4 ? "Active" : ""}`}  onClick={() => handleClick(4)}>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Grocery</p>
                </div>
            </li>
         
            <li className={`${activeIndex === 5 ? "Active" : ""}`}  onClick={() => handleClick(5)}>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Ice Cream</p>
                </div>
            </li>
         
            <li className={`${activeIndex === 6 ? "Active" : ""}`}  onClick={() => handleClick(6)}>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Resturant</p>
                </div>
            </li>
         
            <li className={`${activeIndex === 7 ? "Active" : ""}`}  onClick={() => handleClick(7)}>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Hookah</p>
                </div>
            </li>
         
            <li className={`${activeIndex === 8 ? "Active" : ""}`}  onClick={() => handleClick(8)}>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Coffee</p>
                </div>
            </li>
         
            <li className={`${activeIndex === 9 ? "Active" : ""}`}  onClick={() => handleClick(9)}>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Coffee</p>
                </div>
            </li>
         
            <li className={`${activeIndex === 10 ? "Active" : ""}`}  onClick={() => handleClick(10)}>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Coffee</p>
                </div>
            </li>
         
            <li>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Coffee</p>
                </div>
            </li>
         
            <li>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Coffee</p>
                </div>
            </li>
         
            <li>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Coffee</p>
                </div>
            </li>
         
            <li>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Coffee</p>
                </div>
            </li>
         
            <li>
                <div>
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>Coffee</p>
                </div>
            </li>

        </ul>
      </ScrollContainer>
      </div>
        
        </>
    );
}

export default SubCategorySlider;