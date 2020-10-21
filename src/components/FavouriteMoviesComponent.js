import React, { Component, useContext } from 'react'
import { FavouriteMoviesContext } from '../App'
import MovieCard from './MovieCard'


const FavouriteMovies = (props) => {
    const favouriteMoviesContext = useContext(FavouriteMoviesContext)
    console.log(favouriteMoviesContext)
    return (
        <div style={{margin:'20px'}}>
            <div className="row" style={{ backgroundColor: '#17a2b8', margin: '15xp' }}>
                {favouriteMoviesContext.movies.map((item, index) => (
                    <MovieCard key={item.id} movie={item} />))}
            </div>
        </div>
    )

}
export default FavouriteMovies