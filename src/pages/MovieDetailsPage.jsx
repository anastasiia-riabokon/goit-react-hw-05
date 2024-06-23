import {Link, NavLink, Outlet, useLocation, useParams} from "react-router-dom";
import {Suspense, useRef} from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import {useHTTP} from "../hooks/useHTTP";
import Section from "../components/Section";
import Container from "../components/Container";
import ImgHTTP from "../helpers/ImgHTTP";
import {FaArrowLeft} from "react-icons/fa6";
import {FaStar} from "react-icons/fa";
import clsx from "clsx";

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  const {data: movie, isLoading, error} = useHTTP(`movie/${movieId}`);
  const location = useLocation();
  const goBack = useRef(location.state || "/movies");

  if (!movie) return <Loading />;
  const path = movie.poster_path || movie.backdrop_path;

  const buildLinkClass = ({isActive}) => {
    return clsx(
      "hover:bg-white hover:text-red-600 p-1 px-4 rounded-md",
      isActive && "link_details_active"
    );
  };
  return (
    <Section>
      <Container>
        <div>
          {isLoading && <Loading />}
          {error && <ErrorMessage />}
          {/* <Link to={location.state ?? "/movies"}>Go to back</Link> */}
          <Link to={goBack.current} className="mb-4">
            <FaArrowLeft size={25} />
          </Link>

          <div className="block_film flex bg-white rounded-md overflow-hidden mb-4">
            <ImgHTTP src={path} w={200} h={300} alt={movie.title} />
            <div className="p-8">
              <h1 className="mb-2 text-3xl font-bold font-poiret">{movie.title}</h1>
              <span className="flex gap-1 mb-2">
                <FaStar color="yellow" size={16} />
                <p className="text-[12px]">{movie.vote_average}</p>
              </span>
              {movie.genres && (
                <div className="flex gap-1 mb-2">
                  <h3 className="font-bold">Genres:</h3>
                  <ul className="flex gap-1">
                    {movie.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="font-poiret font-medium">{movie.overview}</p>
            </div>
          </div>
          <div className="relative">
            <div className="flex gap-8 justify-center mb-8">
              <NavLink to="cast" className={buildLinkClass}>
                cast
              </NavLink>
              <NavLink to="review" className={buildLinkClass}>
                review
              </NavLink>
            </div>

            <div
              className="absolute inset-x-0 -bottom-3 w-full h-0.5 bg-gray-300"
              style={{transform: "translateY(-50%)"}}
            ></div>
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
