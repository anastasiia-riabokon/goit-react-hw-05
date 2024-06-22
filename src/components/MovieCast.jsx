import {useParams} from "react-router-dom";
import {useHTTP} from "./hooks/useHTTP";

const MovieCast = () => {
  const {movieId} = useParams();
  const {data: movie, isLoading, error} = useHTTP(`movie/${movieId}/credits`);

  if (!movie || isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  const creditCast = movie ? movie.cast : [];

  return (
    <div>
      {creditCast.map((actor) => (
        <li key={actor.cast_id}>
          <p>
            {actor.name} as {actor.character}
          </p>
          {actor.profile_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              width={100}
              height={150}
            />
          ) : (
            <div className="w-[100px] h-[150px] bg-gray-700/70 flex items-center justify-center">
              <p>Not Photo</p>
            </div>
          )}
          <p>gender: {actor.gender === 1 ? "Women" : "Man"}</p>
        </li>
      ))}
    </div>
  );
};
export default MovieCast;