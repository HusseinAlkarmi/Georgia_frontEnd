import { useState, useEffect } from "react";
import axios from 'axios';
function useFetch(url) {
  const [Data, setData] = useState([]);

  useEffect(() => {
     try {
        axios
          .get(url)
          .then((response) => setData(response.data))
      } 
      catch (error) {
        console.log(error);
      }
    }, [url]);
 
    return [Data , setData];
}
  

export default useFetch;
