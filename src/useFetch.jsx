import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [url]);
  return {data ,error}
};
