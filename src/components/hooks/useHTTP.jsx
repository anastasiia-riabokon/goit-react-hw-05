import {useEffect, useState} from "react";
import {fetchFilms} from "../../services/api";

export const useHTTP = (str) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchFilms(str);
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return {data, isLoading, error};
};
