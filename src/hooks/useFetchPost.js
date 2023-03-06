import { useState, useEffect } from "react";
import axios from 'axios';
function useFetch(url, formData, token) {
  const [Res, setRes] = useState([]);

  useEffect(() => {
     try {
        fetch(`https://allarabinusa.com/api/v1/${url}`, {
            headers: { 'Authorization': `Bearer ${token}` },
            method: 'POST',
            body: formData
          })
          .then((response) => setRes(response.data))
      } 
      catch (error) {
        console.log(error);
      }
    }, [url, formData]);
 
    return [Res , setRes];
}
  

export default useFetch;
