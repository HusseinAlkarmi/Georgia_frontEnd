import React,{useState, useEffect} from "react";
import style from './profile.module.css';
import BottomCardProfile from './BottomCardProfile'
import useFetch from "../../../hooks/useFetch";

function BottomProfile({showFavourite,showSave }){
    // const [profileCard, setProfileCard] = useState();

    const[Data] = useFetch('https://jsonplaceholder.typicode.com/users');

    const Cards = Data.slice(0, 6);

    // setProfileCard(Cards);


    // useEffect(() => {
    //     fetchData();
    //   }, []);

      // function fetchData() {
      //   fetch('https://jsonplaceholder.typicode.com/users')
      //     .then(response => response.json())
      //     .then(data => setProfileCard(data.slice(0,6)))
      //     .catch(error => console.log(error));
      // }

      let title = ""
      {showFavourite ? title ="Saved" : title ="Favorite"}

      let cards = Cards.map(item =>
        <BottomCardProfile title = {title} key={item.id} name = {item.name} id = {item.id}/>
      )
    return(
        <>
        <div className={style.mainBottomDiv}>
            <div className="container mt-5 pt-3">
              <div className="row">
                {cards}
              </div>
            </div>
        </div>
       
        </>
    );
}

export default BottomProfile;