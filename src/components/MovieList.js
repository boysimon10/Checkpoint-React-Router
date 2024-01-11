import React from "react";
import MovieData from "./MovieData";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function MovieList() {
  return (
    <div className="flex items-center justify-center">
      {MovieData.map((movie) => (
        <Link key={movie.id} to={`/Movie/${movie.id}`}>
        <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
