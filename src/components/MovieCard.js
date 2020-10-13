import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Image_URL } from '../Constants/Constants';
import { FavouriteMoviesContext } from '../App'

function isMovieMarkedFavourite(moivesList, newMovie) {
    if (moivesList === undefined) {
        return false;
    }
    return moivesList.some(x => x.id === newMovie.id)
}

const MovieCard = (props) => {
    const favouriteMoviesContext = useContext(FavouriteMoviesContext)

    return (
        <div className='col-sm-3' style={{ margin: '15xp' }}>
            <div style={{ backgroundColor: 'white' }}>

                <Link to={'/detail/' + props.movie.id}>
                    <img alt={props.movie.title} width='80%' style={{ marginLeft: 'auto', marginRight: 'auto' }}
                        src={Image_URL + props.movie.poster_path} />

                    <div >
                        <h4>{props.movie.title}</h4>
                        <span >{props.movie.release_date}</span>
                        <p>{props.movie.vote_average}</p>
                    </div>
                </Link>

                <button style={{ marginBottom: '20px' }} disabled={isMovieMarkedFavourite(favouriteMoviesContext.movies, props.movie)}
                    onClick={() => {
                        favouriteMoviesContext.AddFavouriteMoive(props.movie);
                    }}>Add to Facourites</button>
            </div>
        </div>
    )
}

export default MovieCard
