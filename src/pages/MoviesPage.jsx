import {Link, useLocation, useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useHTTP} from "../hooks/useHTTP";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const MoviesPage = () => {
  const {register, handleSubmit} = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const {data: movie, isLoading, error} = useHTTP(query ? `search/movie?query=${query}` : null);
  const location = useLocation();

  const onSubmit = (data) => {
    setSearchParams(data.query ? {query: data.query} : {});
  };

  const searchResults = movie ? movie.results : [];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="search" {...register("query")} />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={location}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                width={150}
                height={225}
              />
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesPage;
