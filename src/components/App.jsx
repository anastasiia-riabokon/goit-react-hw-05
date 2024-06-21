import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import NotFoundPage from "../pages/NotFoundPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import MovieCast from "./MovieCast";
import MovieReviews from "./MovieReviews";
import {useHTTP} from "./hooks/useHTTP";

function App() {
  const {data: movies, isLoading, error} = useHTTP("trending/movie/day");

  if (!movies || isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  const movieResults = movies ? movies.results : [];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage movies={movieResults} />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="review" element={<MovieReviews />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
