import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="px-6 text-white bg-transparent mb-8">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide [&>*]:flex-shrink-0">

        {movies.map((movie) => (
          <MovieCard
            className="w-40 min-w-40 rounded-md hover:scale-110 transition duration-300 cursor-pointer"
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
