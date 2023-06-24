import React from "react";
import { actors } from "../data";

function Actors() {
  const mappedActors = actors.map((actor) => {
    const mappedMovies = actor.movies.map((movie) => {
      return <li key={movie}>{movie}</li>;
    });
    return (
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <h3>{mappedMovies}</h3>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      <>{mappedActors}</>
    </div>
  );
}

export default Actors;
