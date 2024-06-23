import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {Suspense, useRef} from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import {useHTTP} from "../hooks/useHTTP";
import Section from "../components/Section";
import Container from "../components/Container";

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  const {data: movie, isLoading, error} = useHTTP(`movie/${movieId}`);
  const location = useLocation();
  const goBack = useRef(location.state || "/movies");

  if (!movie) return <Loading />;

  return (
    <Section>
      <Container>
        <div>
          {isLoading && <Loading />}
          {error && <ErrorMessage />}
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
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </Container>
    </Section>
  );
};
export default MovieDetailsPage;
