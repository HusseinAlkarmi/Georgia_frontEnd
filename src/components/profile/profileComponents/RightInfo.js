import { React, useState, useEffect } from "react";
import InfoRow from "./InfoRow";

function RightInfo(props) {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(([data]) => setProfile([data]))
      .catch((error) => console.log(error));
  }

    let Rows = profile.map(item =>
      <InfoRow key={item.id} name = {item.name} id = {item.id} email = {item.email} phone = {item.phone}/>
    )

  return (
    <>
      <div className="col-6">
        {Rows}
      </div>
    </>
  );
}

export default RightInfo;
