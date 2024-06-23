import {useParams} from "react-router-dom";
import {useHTTP} from "../hooks/useHTTP";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import ImgHTTP from "../helpers/ImgHTTP";

const MovieCast = () => {
  const {movieId} = useParams();
  const {data: movie, isLoading, error} = useHTTP(`movie/${movieId}/credits`);

  const creditCast = movie ? movie.cast : [];

  return (
    <div>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      <ul className="list">
        {creditCast.map((actor) => (
          <li key={actor.cast_id} className="item">
            <span className="title flex gap-1 items-center px-2 h-[104px]">
              <p className="font-poiret">Actor:</p>
              <p>{actor.name}</p>
            </span>

            <ImgHTTP src={actor.profile_path} w={200} h={300} alt={actor.name} />

            <span className="title flex gap-1 items-center px-2 h-[104px]">
              <p className="font-poiret">Character:</p>
              <p>{actor.character}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;
