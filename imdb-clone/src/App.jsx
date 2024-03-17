import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Route, Routes, json } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  const [watchlist, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  let handleDeleteFromWatchlist = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie)=>{
      return movie.id != movieObj.id
    })

    setWatchList(filteredWatchList)
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList));
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage) return
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies watchlist={watchlist} handleAddToWatchList={handleAddToWatchList} handleDeleteFromWatchlist={handleDeleteFromWatchlist}/>
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList handleDeleteFromWatchlist={handleDeleteFromWatchlist} setWatchList={setWatchList} watchlist={watchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
