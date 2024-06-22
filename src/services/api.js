import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTAxMGQzZTViMGFlM2YzNDUwM2MxODQ5NTkzYjA1ZiIsInN1YiI6IjY2NzUwZWFkMjkzYWI3YzZjOGZjN2NhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iUSi49kn5J-75MkVDcInyyfGDzNagcZa2gZDNeUwvks";

export const fetchFilms = async (endpoint) => {
  try {
    const {data} = await axios.get(`/${endpoint}`);
    return data;
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
};
