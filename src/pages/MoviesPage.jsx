import {Link, useSearchParams} from "react-router-dom";
import {useHTTP} from "../components/hooks/useHTTP";
import {useForm} from "react-hook-form";

const MoviesPage = () => {
  const {register, handleSubmit} = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const {data: movie, isLoading, error} = useHTTP(query ? `search/movie?query=${query}` : null);
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
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                width={150}
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
