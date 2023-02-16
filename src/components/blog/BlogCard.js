import React from "react";
import style from "./aboutHome.module.css";




function AboutCard(props){
    // let data = props.about.map((item, index) => (
    //     <h1>{item.name}</h1>))
    
    return(
        <>
        {/* {data} */}
        <div key={props.id} className={`col-sm-12 col-md-6 col-lg-4 ${style.card}`}>
            <div className={style.cardBody}>

            <div className={`row ${style.imgDiv}`}>
                <img className={style.img} src={`https://robohash.org/${props.id}?set=set2&size=65x65`} alt={`monster ${props.name}`} />
            </div>

            <div className={`row ${style.aboutArticle}`}>
                 <h1 className={style.aboutDisc}>{props.name}</h1>
            </div>

            </div>
        </div>
        </>

    );
}

export default AboutCard;