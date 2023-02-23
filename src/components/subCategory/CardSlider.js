import React, {useState, useEffect } from "react";
import style from "../../assets/style/subCategorySlider.module.css";
// import "../mainComponent/mainStyle.css";


function SliderList(props){
    const [activeInd, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        console.log(index + " index");
        setActiveIndex(index);
        console.log(activeInd + " Active");
      }


    return(
        <>
        {/* <li key="{key}">{props.text}</li> */}
        <li  className={`${activeInd === props.id ? "Active" : ""}`} onClick={() => handleClick(props.id)}>
                <div >
                    <img className={style.subImg} src={require(`../../assets/Images/subCategory/${props.id}_li.png`)}/>
                    <p className={style.subTitle}>{`${props.name} ${props.id}`}</p>
                </div>
        </li>
        </>
    );
}

export default SliderList;