import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const jsonData = await data.json();
    //console.log(jsonData);

    const trailer = jsonData.results.find((video) => video.type === "Trailer");
    //const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    //console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo(movieId);
  }, [movieId]);
};

export default useMovieTrailer;
