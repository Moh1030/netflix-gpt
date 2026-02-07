import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  //if (!movies?.nowPlayingMovies) return null;

  return (
    <div>
      <div className="relative z-20 -mt-28">
        <MovieList title={"Trending Now"} movies={movies.nowPlayingMovies} />
      </div>

      <div className="bg-black min-h-screen">
        <MovieList title={"Trending Now"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
