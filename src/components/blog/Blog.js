import React from "react";
import style from "./aboutHome.module.css";
import AboutCard from "./AboutCard";
import { useState , useEffect } from "react";




function AboutHome(){

    const [about, setAbout] = useState([]);

    useEffect(() => {
        // This code will run when the component mounts
        fetchData();
      }, []);

      function fetchData() {
        // Use fetch or any other method to fetch data
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setAbout(data.slice(0,3)))
          .catch(error => console.log(error));
      }

      let cards = about.map(item =>
        <AboutCard key={item.id} name = {item.name} id = {item.id}/>
      )

    

    return(
        <>
        <div className={style.mainDiv}>
           
        {/* <AboutCard about={about}/> */}
        <div className="container">
            <div className={`row ${style.cardsRowCenter}`}>
              {cards}
            </div>
        </div>

        </div>
        </>
    );
}

export default AboutHome;