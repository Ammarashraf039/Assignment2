import React, { createContext, useState, useCallback } from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import DetailViewComponent from './components/DetailViewComponent';
import ReviewComponent from './components/ReviewComponent';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import FavouriteMovies from './components/FavouriteMovies'
export const FavouriteMoviesContext = createContext([]);

function App() {

  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const setFavouriteMoviesFunction = useCallback((movie) => {
    if (favouriteMovies != undefined) {
      let alreadyInList = favouriteMovies.some(x => x.id === movie.id);
      if (alreadyInList) {
        console.log('already in list');
      }
      else {
        setFavouriteMovies([...favouriteMovies, movie]);
        console.log(movie)
      }
    }
  }, [favouriteMovies])

  return (
    <div className="App">

      <BrowserRouter>
      
      <NavBar />
        <Switch>
          <Route path='/reviews/:id' render={(props) => <ReviewComponent {...props} />} />
          <Route path='/detail/:id' render={(props) => <DetailViewComponent {...props} />} />
          <FavouriteMoviesContext.Provider value={{ AddFavouriteMoive: setFavouriteMoviesFunction, movies: favouriteMovies }}>
            <Route path='/' exact>
              <HomeComponent />
            </Route>
            
            <Route path="/favourites" exact component={FavouriteMovies}></Route>
          </FavouriteMoviesContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
