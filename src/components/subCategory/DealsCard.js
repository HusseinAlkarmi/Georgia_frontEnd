import { React } from "react";
import style from './SubCategory.module.css';

function DealsCard(props) {
  return (

     <div className={style.dealsCard}>
        <img src={require(`./Images/marketing.png`)}/>
        <p>{props.name}</p>
    </div>

  );
}
export default DealsCard;
