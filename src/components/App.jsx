import {Route, Routes} from "react-router-dom";
import {useHTTP} from "./hooks/useHTTP";
import {Suspense, lazy} from "react";
import Loading from "./Loading.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

const Layout = lazy(() => import("./Layout.jsx"));
const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("./MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews"));

function App() {
  const {data: movies, isLoading, error} = useHTTP("trending/movie/day");

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  const movieResults = movies ? movies.results : [];

  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default App;
