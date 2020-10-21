import React, { createContext, useState,useEffect, useCallback } from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import DetailViewComponent from './components/DetailView/DetailViewComponent';
import ReviewComponent from './components/ReviewComponent';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import FavouriteMovies from './components/FavouriteMoviesComponent'
import { AddMovieRequest, AddMovieResponse } from './Actions/ActionCall'
import { connect } from 'react-redux'

export const FavouriteMoviesContext = createContext([]);

function App(props) {

  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    setFavouriteMovies(props.favouriteMovies)
}, [props.favouriteMovies])

  const setFavouriteMoviesFunction = useCallback((movie) => {
    if (favouriteMovies != undefined) {
      let alreadyInList = favouriteMovies.some(x => x.id === movie.id);
      if (alreadyInList) {
        console.log('already in list');
      }
      else {
        props.AddMovieRequest(movie)
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

const mapStateToProps = (state) => {
  if (state.favouriteMovies != undefined) {
    return { favouriteMovies: state.favouriteMovies }
  }

  return { favouriteMovies: [] }
}

export default connect(mapStateToProps, {
  AddMovieRequest, AddMovieResponse
})(App);
