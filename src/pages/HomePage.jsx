import {Link, useLocation} from "react-router-dom";
import Section from "../components/Section";
import Container from "../components/Container";
import ImgHTTP from "../helpers/ImgHTTP";

const HomePage = ({movies}) => {
  const location = useLocation();
  return (
    <Section>
      <Container>
        <div className="relative mb-12 py-2 max-w-[700px] left-1/2 transform -translate-x-1/2">
          <span className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-red-500 opacity-50 rounded-full blur-md animate-pulse"></span>
          <h1 className="text-white font-poiret text-8xl text-center font-extrabold relative z-10">
            Trending today
          </h1>
        </div>

        <ul className="list">
          {movies.map((movie) => {
            const path = movie.poster_path || movie.backdrop_path;
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} className="item" state={location}>
                  <ImgHTTP src={path} alt={movie.title} w={200} h={300} />
                  <p className="title">{movie.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};
export default HomePage;
