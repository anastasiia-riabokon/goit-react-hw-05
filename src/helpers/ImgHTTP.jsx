import imgNot from "/image-not-found.jpg";

const ImgHTTP = ({src, w, h, alt}) => {
  return (
    <>
      {src ? (
        <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt} width={w} height={h} />
      ) : (
        <img src={imgNot} />
      )}
    </>
  );
};

export default ImgHTTP;
