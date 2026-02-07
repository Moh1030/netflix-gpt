import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBG = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo?.key) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <iframe
        className="w-full h-screen object-cover scale-125 pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};

export default VideoBG;
