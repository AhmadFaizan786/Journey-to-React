import React from "react";

function MovieCard({ poster_path, name }) {
  return (
    <div
      className="h-[45vh] w-[220px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex justify-center items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-white text-xl p-1 w-full text-center bg-gray-900/60">{name}</div>
    </div>
  );
}

export default MovieCard;
