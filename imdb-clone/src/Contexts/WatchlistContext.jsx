// WatchListContext.js
import React, { createContext, useContext, useState, useEffect, useCallback} from 'react';

// Create a context
const WatchListContext = createContext();

// Provider component that wraps your app and provides the watchlist state
export const WatchListProvider = ({ children }) => {
  const [watchlist, setWatchList] = useState([]);

  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  const handleAddToWatchList = useCallback((movieObj) => {
    const newWatchList = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  },[watchlist]);

  const handleDeleteFromWatchlist = useCallback((movieObj) => {
    const filteredWatchList = watchlist.filter((movie) => movie.id !== movieObj.id);
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
  },[watchlist]);

  return (
    <WatchListContext.Provider value={{ watchlist, handleAddToWatchList, handleDeleteFromWatchlist }}>
      {children}
    </WatchListContext.Provider>
  );
};

// Custom hook to use the watchlist context
export const useWatchList = () => useContext(WatchListContext);
