import {Link} from "react-router-dom";
import Section from "../components/Section";
import Container from "../components/Container";

const HomePage = ({movies}) => {
  return (
    <Section>
      <Container>
        <div className="relative mb-12 py-2 max-w-[700px] left-1/2 transform -translate-x-1/2">
          <span className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-red-500 opacity-50 rounded-full blur-md animate-pulse"></span>
          <h1 className="text-white font-poiret text-8xl text-center font-extrabold relative z-10">
            Trending today
          </h1>
        </div>

        <ul className="flex flex-wrap gap-x-3 gap-y-8 justify-center">
          {movies.map((movie) => (
            <li
              key={movie.id}
              className="flex flex-col items-center w-[200px] bg-white rounded-md overflow-hidden"
            >
              <img
                src={
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}` ||
                  `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                }
                alt={movie.title}
                width={200}
                height={300}
              />
              <Link to={`/movies/${movie.id}`} className="text-blue-950 py-4 text-center">
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
export default HomePage;
