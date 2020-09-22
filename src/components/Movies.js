import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_KEY, API_KEY_TEXT, Basic_Url, Movie_URL } from '../Constants/Constants';

export default class Movies extends Component {


    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: false,
            error: ''
        }

    }

    componentDidMount() {
        try {
            this.setState({
                error: '',
                isLoading: true,
                movies: []
            })

            let url = Basic_Url + Movie_URL + '?' + API_KEY_TEXT + '=' + API_KEY
            axios.get(url)
                .then(response => {
                    this.setState({
                        error: '',
                        isLoading: false,
                        movies: response.data.results
                    })
                })
                .catch(e => {
                    this.setState({
                        error: e,
                        isLoading: false,
                        movies: []
                    })
                })
        }
        catch (e) {
            this.setState({
                error: e,
                isLoading: false,
                movies: []
            })
        }
    }

    render() {
        if (this.state.error == '') {
            return (
                <div className="row" style={{ backgroundColor: '#17a2b8', marginLeft: '-15xp', marginTop: '20px' }}>
                    {this.state.movies.map((item, index) => (
                        <div className='col-sm-3' key={index} >
                            <div style={{ backgroundColor: 'white' }}>

                                <Link to={'/detail/' + item.id}>
                                    {/* <img width='80%' style={{ marginLeft: 'auto', marginRight: 'auto' }} src={item.url} /> */}

                                    <div>
                                        <h4>{item.title}</h4>
                                        <p><span>{item.release_date}</span></p>
                                        <p><span>{item.vote_average}</span></p>
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
                <div>
                    {this.state.error}
                </div>
            )
        }

    }
}
