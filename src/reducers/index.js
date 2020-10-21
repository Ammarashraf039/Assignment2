import { combineReducers } from 'redux'
import movieReducers from '../reducers/reducer'
import favouriteMoviesReducer from '../reducers/favouriteMoviesReducer'

export default combineReducers(
    {
        movies: movieReducers,
        favouriteMovies:favouriteMoviesReducer
        //faviorie movies
    }
)