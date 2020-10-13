import React, { Component, useContext } from 'react'

import { apiContext } from './HomeComponent'

import MovieCard from './MovieCard'

const Movies = (props) => {

    return (
        <apiContext.Consumer>
            {data => {
                if (data.moviesList == undefined || data.moviesList.length == 0) {
                    return (
                        <div>Please wait</div>
                    )
                } else {
                    return (
                        <div className="row" style={{ backgroundColor: '#17a2b8', margin: '15xp' }}>
                            {data.moviesList.map((item, index) => (
                                <MovieCard key={item.id} movie={item} />
                               ))}
                        </div>
                    )
                }
            }
            }
        </apiContext.Consumer>
    )

}

export default Movies;