import React, {useState} from "react";
import style from "../../assets/style/subCategorySlider.module.css";
import useFetch from "../../hooks/useFetch";
// import "../mainComponent/mainStyle.css";
import ScrollContainer from 'react-indiana-drag-scroll'
import SliderList from "./CardSlider";

function SubCategorySlider(){
    const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
    const subCategoryList = Data.slice(0, 7);

    // let subCategoryListTest = [{id :0 , Name : "Coffee"},{id :1, Name : "Desert"},{id :2, Name :"Bakary"}];


    
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleClick = (index) => {
        setActiveIndex(index);
    }
    
    let sliderList = subCategoryList.map(item => <SliderList activeIndex={activeIndex} handleClick={handleClick} name = {item.name} id = {item.id} key = {item.id}/>);
    return(
        <>

<div className={style.width_slider}  style={{position:"relative"}}>
    <ScrollContainer className="scroll-container">
    <ul className={`${style.slider_ul}`} >
            <li className={`${activeIndex === 0 ? style.activeLi : ""}`} onClick={() => handleClick(0)}>
                <div >
                    <img className={style.subImg} src={require('../../assets/Images/subCategory/coffeLogo.png')}/>
                    <p className={style.subTitle}>All</p>
                </div>
            </li>

        {sliderList}

        </ul>
      </ScrollContainer>
      </div>
        
        </>
    );
}

export default SubCategorySlider;