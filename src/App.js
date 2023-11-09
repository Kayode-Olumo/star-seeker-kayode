import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from "./pages/Home/Home";
import GateDetails from "./pages/GateDetails/GateDetails";
import CheapTravel from "./pages/CheapTravelComponents/CheapTravel/CheapTravel";
import NavBar from "./components/NavBar/NavBar";
import GatesSearch from "./components/GatesComponents/GatesSearch/GatesSearch";
import Favourites from "./pages/Favourites/Favourites";
import Footer from "./components/Footer/Footer";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const routeFavorites = JSON.parse(localStorage.getItem("star-seeker-favs"));
    setFavorites(routeFavorites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("star-seeker-favs", JSON.stringify(items));
  };

  const addFavouriteRoute = (route) => {
    const newFavouriteList = [...favorites, route];
    setFavorites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteRoute = (route) => {
    const newFavouriteList = favorites.filter(
      (favorite) => favorite.from.uuid + favorite.to.uuid !== route
    );
    setFavorites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <>
      <Router>
        <NavBar favoritesData={favorites} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/starseeker/gates/" element={<GatesSearch />} />
          <Route
            path="/starseeker/gates/gate-details/:code"
            element={<GateDetails />}
          />
          <Route
            path="/starseeker/cheap-travel"
            element={<CheapTravel handleFavouritesClick={addFavouriteRoute} />}
          />
          <Route
            path="/starseeker/favourites"
            element={
              <Favourites
                favoritesData={favorites}
                handleFavouritesRemoveClick={removeFavouriteRoute}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
