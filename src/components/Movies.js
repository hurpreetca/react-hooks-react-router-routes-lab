import React from "react";
import { movies } from "../data";

function Movies() {
  const mappedMovies = movies.map((movie) => {
    const mappedGenres = movie.genres.map((genre) => {
      return <li key={genre}>{genre}</li>;
    });
    return (
      <div key={movie.title}>
        <h2>Title: {movie.title}</h2>
        <h3>Runtime: {movie.time}</h3>
        <ul>{mappedGenres}</ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      <>{mappedMovies}</>
    </div>
  );
}

export default Movies;
