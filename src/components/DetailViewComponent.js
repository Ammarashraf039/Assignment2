import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_KEY, API_KEY_TEXT, Basic_Url, Image_URL, Movie_URL } from '../Constants/Constants';

export default class DetailViewComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            error: '',
            detail: null
        }
    }

    componentDidMount() {
        try {
            const movieId = this.props.match.params.id
            this.setState({
                error: '',
                isLoading: true,
                detail: null
            })
            const url = Basic_Url + movieId + '?' + API_KEY_TEXT + '=' + API_KEY
            axios.get(url)
                .then(response => {
                    this.setState({
                        error: '',
                        isLoading: false,
                        detail: response.data
                    })
                })
                .catch(e => {
                    this.setState({
                        error: e,
                        isLoading: false,
                        detail: null
                    })
                })
        }
        catch (e) {
            this.setState({
                error: e,
                isLoading: false,
                detail: null
            })
        }
    }
    render() {
        if (this.state.error == '' && this.state.detail != null) {
            return (
                <div>
                    <div className='row' key={this.state.detail.id}>
                        <div style={{ backgroundColor: 'white', marginTop: '50px', marginLeft: '50px' }} className='col-sm-3'>
                            <a>
                                <img width='100%' style={{ marginLeft: 'auto', marginRight: 'auto' }}
                                    src={Image_URL + this.state.detail.poster_path} />
                            </a>
                        </div>

                        <div className='col-sm-6'>
                            <div style={{ backgroundColor: 'white', marginTop: '50px', textAlign: 'left' }}>
                                <h2>{this.state.detail.title}</h2>
                                <h4 style={{ textAlign: 'left' }}>Overview</h4>
                                <p style={{ textAlign: 'left' }}>{this.state.detail.overview}</p>
                                <ul style={{ marginTop: '10px' }} className="list-group list-group-horizontal">
                                    <li className="list-group-item list-group-item-dark">Runtime (min.)</li>
                                    <li className="list-group-item ">{this.state.detail.runtime}</li>
                                    <li className="list-group-item list-group-item-dark">Release Date</li>
                                    <li className="list-group-item ">{this.state.detail.release_date}</li></ul>
                                <ul style={{ marginTop: '10px' }} className="list-group list-group-horizontal">
                                    <li className="list-group-item list-group-item-dark">Genres</li>
                                    {this.state.detail.genres.map((item, index) => (
                                        <li className="list-group-item" key={index}>{item.name}</li>
                                    ))}
                                </ul>
                                <ul style={{ marginTop: '10px' }} className="list-group list-group-horizontal">
                                    <li className="list-group-item list-group-item-dark">Spoken Languages</li>
                                    {this.state.detail.spoken_languages.map((item, index) => (
                                        <li className="list-group-item" key={index}>{item.name}</li>
                                    ))}
                                </ul>
                                <ul style={{ marginTop: '10px' }} className="list-group list-group-horizontal">
                                    <li className="list-group-item list-group-item-dark">Production Companies</li>
                                    {this.state.detail.production_companies.map((item, index) => (
                                        <li className="list-group-item" key={index}>{item.name}</li>
                                    ))}
                                </ul>
                                <Link to={'/reviews/' + this.state.detail.id}>
                                    <Button style={{ marginTop: '10px' }}>View Reviews</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.isLoading) {
            return (
                <div>
                    Loading Data!
                </div>
            )

        }
        else if (this.state.error !== '') {

            return (
                <div>
                    {this.state.error}
                </div>
            )
        }
        else {
            return (
                <div>
                    Please wait
                </div>
            )
        }
    }
}
