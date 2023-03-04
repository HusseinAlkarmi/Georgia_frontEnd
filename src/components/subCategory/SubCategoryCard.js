import React from "react";
import style from "../../assets/style/SubCategory.module.css";
import useFetch from "../../hooks/useAxios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function SubCategoryCard(props) {

  const { id } = useParams();
let url = `en/stores?main_id=${id}`;
  const [Data] = useFetch(url);

  const categoryCards = Data.data;

  const handleChangePage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-4">
      <h1 className={style.categoryTitle}>ALL</h1>

      <div
        className={
          props.displayComponent
            ? style.cardContainer
            : style.cardServiceContainer
        }
      >
        {categoryCards?.map((item) => (
          <div
            key={item.id}
            className={props.displayComponent ? style.card : style.cardService}
          >
            <Link
              to={`/Marketprofile/${item.id}`}
              onClick={handleChangePage}
              className={style.cardLink}
            >
              <img
                src={require(`../../assets/Images/subCategory/category_img.png`)}
              />
              <p>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SubCategoryCard;
