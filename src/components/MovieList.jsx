import {Link} from "react-router-dom";
import ImgHTTP from "../helpers/ImgHTTP";

const MovieList = ({path, title, id, location}) => {
  return (
    <>
      <Link to={`/movies/${id}`} state={location} className="item">
        <ImgHTTP src={path} alt={title} w={200} h={300} />
        <p className="title">{title}</p>
      </Link>
    </>
  );
};
export default MovieList;
