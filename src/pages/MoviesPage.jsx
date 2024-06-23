import {Link, useLocation, useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useHTTP} from "../hooks/useHTTP";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Section from "../components/Section";
import Container from "../components/Container";
import ImgHTTP from "../helpers/ImgHTTP";
import {RxCross1} from "react-icons/rx";
import {useState} from "react";

const MoviesPage = () => {
  const {register, handleSubmit} = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const query = searchParams.get("query");
  const {data: movie, isLoading, error} = useHTTP(query ? `search/movie?query=${query}` : null);
  const location = useLocation();

  const onSubmit = (data) => {
    setSearchParams(data.query ? {query: data.query} : {});
  };

  const searchResults = movie ? movie.results : [];

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center gap-6">
          <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 flex gap-4">
            <div className="relative w-full">
              <input
                type="search"
                {...register("query")}
                autoComplete="off"
                className="w-full h-[45px] bg-transparent border-b border-white outline-none font-play text-white text-xl p-1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <RxCross1 size={20} />
                </button>
              )}
            </div>
            <button type="submit" className="font-play bg-white text-blue-950 px-4 rounded-md">
              Search
            </button>
          </form>
          {isLoading && <Loading />}
          {error && <ErrorMessage />}
          <ul className="list">
            {searchResults.map((item) => {
              const path = item.poster_path || item.backdrop_path;
              return (
                <li key={item.id}>
                  <Link to={`/movies/${item.id}`} state={location} className="item">
                    <ImgHTTP src={path} alt={item.title} w={200} h={300} />
                    <p className="title">{item.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
};
export default MoviesPage;
