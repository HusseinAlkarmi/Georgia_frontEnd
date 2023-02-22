import { React } from "react";
import style from "../../assets/style/SubCategory.module.css";
import useFetch from "../../hooks/useFetch";

function DealsCard(props) {
  const [Data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const dealsCards = Data.slice(0, 3);

  return (
    <div className={style.firstContainer}>
     <h1 className={style.dealsTitle}>DEALS</h1>

      <div className={style.dealsContainer}>
        {dealsCards.map((item) => (
          <div className={style.dealsCard}>

            <img
              src={require(`../../assets/Images/marketProfile/marketing.png`)}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DealsCard;
