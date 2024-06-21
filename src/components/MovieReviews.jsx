import {useParams} from "react-router-dom";
import {useHTTP} from "./hooks/useHTTP";
import {format} from "date-fns";

const MovieReviews = () => {
  const {movieId} = useParams();
  const {data: movie, isLoading, error} = useHTTP(`movie/${movieId}/reviews`);

  if (!movie || isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  const reviewResults = movie ? movie.results : [];
  console.log(reviewResults);
  return (
    <div>
      {reviewResults ? (
        <ul>
          {reviewResults.map((review) => (
            <li key={review.id}>
              <span>
                {review.author_details.avatar_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
                    alt={review.author}
                    className="object-cover block overflow-hidden"
                  />
                ) : (
                  <div></div>
                )}
                <p>{review.author}</p>
              </span>
              <p>{format(new Date(review.updated_at), "dd.MM.yyyy HH:mm:ss")}</p>

              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Not reviews</div>
      )}
    </div>
  );
};
export default MovieReviews;
