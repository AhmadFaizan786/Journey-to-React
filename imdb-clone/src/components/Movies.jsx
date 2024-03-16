import React from "react";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setmovies] = useState([]);
  const [pageNo, setpageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setpageNo(pageNo);
    } else {
      setpageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setpageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=8e0e265eab942960c2a424aca45928e0&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setmovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <div className="p-2">
      <div className="text-xl text-center font-bold p-3">Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-around gap-7">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              key={movieObj.id}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
}

export default Movies;

//api url with key
//https://api.themoviedb.org/3/movie/popular?api_key=8e0e265eab942960c2a424aca45928e0&language=en-US&page=1
