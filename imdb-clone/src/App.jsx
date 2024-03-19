import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Route, Routes, json } from "react-router-dom";
import Banner from "./components/Banner";
import { useWatchList } from "./Contexts/WatchlistContext";

function App() {

  const { watchlist, handleAddToWatchList, handleDeleteFromWatchlist,setWatchList} = useWatchList(); // Use the hook to access the context

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddToWatchList={handleAddToWatchList}
                  handleDeleteFromWatchlist={handleDeleteFromWatchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                handleDeleteFromWatchlist={handleDeleteFromWatchlist}
                setWatchList={setWatchList}
                watchlist={watchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
