import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_KEY, API_KEY_TEXT, Basic_Url, Image_URL, Movie_URL } from '../Constants/Constants';

export default class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.moviesList
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ movies: nextProps.moviesList })
    }

    render() {
        let { isLoggedIn } = true;
        if (this.state.movies.length > 0) {
            return (
                <div className="row" style={{ backgroundColor: '#17a2b8', margin: '15xp' }}>
                    {this.state.movies.map((item, index) => (
                        <div className='col-sm-3' key={index} style={{ margin: '15xp' }}>
                            <div style={{ backgroundColor: 'white' }}>

                                <Link to={'/detail/' + item.id}>
                                    <img width='80%' style={{ marginLeft: 'auto', marginRight: 'auto' }}
                                        src={Image_URL + item.poster_path} />

                                    <div >
                                        <h4>{item.title}</h4>
                                        <span >{item.release_date}</span>
                                        <p>{item.vote_average}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
        else {
            return (
                <div>Please wait</div>
            )
        }

    }
}
