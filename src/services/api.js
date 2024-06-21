import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTAxMGQzZTViMGFlM2YzNDUwM2MxODQ5NTkzYjA1ZiIsInN1YiI6IjY2NzUwZWFkMjkzYWI3YzZjOGZjN2NhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iUSi49kn5J-75MkVDcInyyfGDzNagcZa2gZDNeUwvks";

export const fetchFilms = async (str = "movie/", option) => {
  const {data} = await axios.get(str, {
    params: {
      ...option,
    },
  });
  return data;
};
