import {useParams} from "react-router-dom";
import {useHTTP} from "../hooks/useHTTP";
import {format} from "date-fns";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import ImgHTTP from "../helpers/ImgHTTP";

const MovieReviews = () => {
  const {movieId} = useParams();
  const {data: movie, isLoading, error} = useHTTP(`movie/${movieId}/reviews`);

  const reviewResults = movie ? movie.results : [];

  return (
    <div>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      {!isLoading && reviewResults.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {reviewResults.map((review) => (
            <li key={review.id} className="bg-white rounded-md p-4">
              <span className="block_photo_name flex gap-2 mb-3">
                <ImgHTTP src={review.author_details.avatar_path} w={60} h={60} />
                <span>
                  <h2 className="">{review.author}</h2>
                  <p className="font-poiret text-xs">
                    {format(new Date(review.updated_at), "dd.MM.yyyy HH:mm:ss")}
                  </p>
                </span>
              </span>

              <p className="font-poiret font-semibold">{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && (
          <div className="text-center text-white text-3xl font-poiret font-bold">No Reviews</div>
        )
      )}
    </div>
  );
};
export default MovieReviews;
