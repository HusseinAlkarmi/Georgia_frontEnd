import React from "react";
import style from "../../../assets/style/homePage/aboutHome.module.css";
import AboutCard from "./AboutCard";

function AboutHome({aboutData}){

    // const [about, setAbout] = useState([]);

    // useEffect(() => {
    //     fetchData();
    //   }, []);

    //   function fetchData() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //       .then(response => response.json())
    //       .then(data => setAbout(data.slice(0,3)))
    //       .catch(error => console.log(error));
    //   }

      let cards = aboutData?.map(item =>
        <AboutCard key={item.id} description = {item.description} image = {item.image} title = {item.title} id = {item.id}/>
      )

    

    return(
        <>
        <div className={style.mainDiv}>
        <div className="container">
          <h1 className="mb-5">Who we Are?</h1>
            <div className={`row ${style.cardsRowCenter}`}>
              {cards}
            </div>
        </div>

        </div>
        </>
    );
}

export default AboutHome;