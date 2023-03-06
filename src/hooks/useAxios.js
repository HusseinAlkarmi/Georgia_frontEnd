import { useState, useEffect } from "react";
import axios from 'axios';
function useAxios(url) {
  const [Data, setData] = useState([]);

  useEffect(() => {
     try {
        axios
          .get(`https://allarabinusa.com/api/v1/${url}`)
          .then((response) => setData(response.data))
      } 
      catch (error) {
        console.log(error);
      }
    }, [url]);
 
    return [Data , setData];
}
  

export default useAxios;
