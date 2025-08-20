import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";

const MovieList = () => {
  const movies = useSelector((state) => state.moviesContainer.movies);

  const dispatch = useDispatch();

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <div>
      <h1>MovieList</h1>
      {movies.map((movie) => (
        <div className="gggg" key={movie.id}>
          {movie.name}
          <button onClick={() => handleRemoveMovie(movie.id)}>
            {" "}
            Delete Movie
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
