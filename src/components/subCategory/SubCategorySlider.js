import React, {useState} from "react";
import style from "../../assets/style/subCategorySlider.module.css";
import useFetch from "../../hooks/useAxios";
// import "../mainComponent/mainStyle.css";
import ScrollContainer from 'react-indiana-drag-scroll'
import SliderList from "./CardSlider";
import { useParams } from 'react-router-dom';

function SubCategorySlider(){
    const { id } = useParams();
let url = `en/main-categories/${id}/sub-categories`;

    const [Data] = useFetch(url);
    const subCategoryList = Data.data;
    console.log(subCategoryList);

    // let subCategoryListTest = [{id :0 , Name : "Coffee"},{id :1, Name : "Desert"},{id :2, Name :"Bakary"}];
    
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleClick = (index) => {
        setActiveIndex(index);
    }
    
    let sliderList = subCategoryList?.map(item => <SliderList activeIndex={activeIndex} handleClick={handleClick} name = {item.name} id = {item.id} key = {item.id} image={item.image}/>);
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