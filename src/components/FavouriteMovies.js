import React, { Component, useContext } from 'react'
import { FavouriteMoviesContext } from '../App'
import MovieCard from './MovieCard'


const FavouriteMovies = (props) => {
    const favouriteMoviesContext = useContext(FavouriteMoviesContext)
    console.log(favouriteMoviesContext)
    return (
        <div>
            {favouriteMoviesContext.movies.map((item, index) => (
                <MovieCard position={index} movie={item} />
            ))}
        </div>
    )

}
export default FavouriteMovies