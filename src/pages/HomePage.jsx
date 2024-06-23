import {Link} from "react-router-dom";
import Section from "../components/Section";
import Container from "../components/Container";

const HomePage = ({movies}) => {
  return (
    <Section>
      <Container>
        <div className="mt-5">
          <h1 className="text-white font-italian text-8xl">Trending today</h1>
          <ul className="flex flex-col gap-3">
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};
export default HomePage;
