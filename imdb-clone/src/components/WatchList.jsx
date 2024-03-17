import React, { useEffect, useState } from "react";
import genres from "../assets/Genre_Id";

function WatchList({ watchlist, setWatchList,handleDeleteFromWatchlist }) {
  //maintaining states to implement genre filter
  const [genreList, setgenreList] = useState(["All Genres"]);

  //for selecting current genre on movies of watchlist
  const [currGenre, setcurrGenre] = useState(["All Genres"]);

  const [search, setsearch] = useState("");
  let handleSearch = (e) => {
    setsearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setcurrGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };
  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genres[movieObj.genre_ids[0]];
    });

    // Convert temp into a Set to filter out duplicate genre names
    const uniqueGenresSet = new Set(temp);

    // Convert the Set back into an array
    const uniqueGenresArray = Array.from(uniqueGenresSet);

    // Add 'All Genres' to the beginning of the array
    uniqueGenresArray.unshift("All Genres");

    // Update genreList state with the unique genres
    setgenreList(uniqueGenresArray);

    // Now this should log the expected values
    console.log(uniqueGenresArray);
  }, [watchlist]);

  return (
    <>
      <div  className="flex justify-center flex-wrap m-4 gap-2">
        {genreList.map((genre) => {
          return (
            <div
              onClick={()=>handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl items-center font-bold text-white hover:cursor-pointer"
                  : 'flex justify-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl items-center font-bold text-white hover:cursor-pointer'
              }
            >
              {genre}
            </div>
          );
        })}

      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[2.2rem] w-[18rem]  bg-gray-200 px-2 outline-none "
        />
      </div>

      <div className="border border-gray-200 m-8 rounded-lg overflow-hidden">
        <table className="w-full text-black text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex flex-row justify-evenly ">
                <div onClick={sortIncreasing} className="hover:cursor-pointer">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div>Rating</div>
                <div onClick={sortDecreasing} className="hover:cursor-pointer">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((movieObj)=>{
              if(currGenre == 'All Genres'){
                return true
              }else{
                return genres[movieObj.genre_ids[0]]==currGenre;
              }
            })
              .filter((movieObj) => {
                return movieObj.original_title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id}>
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[18rem "
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.original_title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genres[movieObj.genre_ids[0]]}</td>
                    <td onClick={()=>handleDeleteFromWatchlist(movieObj)}  className="text-red-800 hover:cursor-pointer">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
