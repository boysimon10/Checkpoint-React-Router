import React from "react";
import MovieData from "./MovieData";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function MovieList() {
  return (
    <div className="flex items-center justify-center">
        {/* Utilisation de la méthode map pour itérer sur chaque objet 'movie' dans le tableau MovieData */}
      {MovieData.map((movie) => (
        <Link key={movie.id} to={`/Movie/${movie.id}`}>
        <MovieCard movie={movie} />
        </Link>
      ))}
      {/* Utilisation de Link pour créer un lien vers la page individuelle du film */}
    </div>
  );
}

export default MovieList;
