import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {fetchFilms} from "../services/api";
import {useHTTP} from "../components/hooks/useHTTP";
import {useRef} from "react";

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  const {data: movie, isLoading, error} = useHTTP(`movie/${movieId}`);
  const location = useLocation();
  const goBack = useRef(location.state || "/movies");

  if (!movie) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* <Link to={location.state ?? "/movies"}>Go to back</Link> */}
      <Link to={goBack.current}>Go to back</Link>
      <img
        src={
          `https://image.tmdb.org/t/p/w500${movie.poster_path}` ||
          `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        }
        alt={movie.title}
      />
      <h1>title {movie.title}</h1>
      <p>{movie.vote_average}</p>
      {movie.genres && (
        <div>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}
      <p>{movie.overview}</p>
      <div>
        <Link to="cast">cast</Link>
        <Link to="review">review</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
