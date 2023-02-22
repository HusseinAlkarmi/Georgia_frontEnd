import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './SubCategory.module.css';
function CategoryHeader(props) {
  const [categoryHeaderData, setCategoryHeaderData] = useState([]);

  useEffect(() => {
    getCategoryHeader();
  });

  const getCategoryHeader = () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    try {
      axios.get(url)
      .then((response) =>  response.data)
      .then(([data])=> setCategoryHeaderData([data]));

    } catch (error) {
      console.log(error);
    }
  };

  return(
    <div className={style.categoryContainer}> 
        {
          categoryHeaderData.map(item=> (
          <><img src={require(`./Images/${item.id}_categoryHeader.png`)} />
          <h1>{item.name}</h1></>
          ))  
        }
    </div>
  )
}
export default CategoryHeader;
