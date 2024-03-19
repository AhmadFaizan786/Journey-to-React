import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddToWatchList,
  handleDeleteFromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[45vh] w-[220px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div onClick={()=>handleDeleteFromWatchlist(movieObj)} className="flex justify-center items-center rounded-lg m-2 h-8 w-8 bg-gray-900/60">
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObj)}
          className="flex justify-center items-center rounded-lg m-2 h-8 w-8 bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl p-1 w-full text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
