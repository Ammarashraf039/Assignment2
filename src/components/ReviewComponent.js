import React, { Component } from 'react'
import axios from 'axios'
import { API_KEY, API_KEY_TEXT, Basic_Url, Review_Url } from '../Constants/Constants';

export default class ReviewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: '',
            isLoading: true,
            reviews: []
        }
    }

    componentDidMount() {
        try {
            debugger;
            const movieId = this.props.match.params.id
            this.setState({
                error: '',
                isLoading: true,
                reviews: []
            })
            const url = Basic_Url + movieId + Review_Url + '?' + API_KEY_TEXT + '=' + API_KEY
            axios.get(url)
                .then(response => {
                    this.setState({
                        error: '',
                        isLoading: false,
                        reviews: response.data.results
                    })
                })
                .catch(e => {
                    this.setState({
                        error: e,
                        isLoading: false,
                        reviews: []
                    })
                })
        }
        catch (e) {
            this.setState({
                error: e,
                isLoading: false,
                reviews: []
            })
        }
    }

    render() {
        if (this.state.reviews.length > 0) {
            return (
                <div>
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Author</th>
                                <th scope="col">Excerpt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.reviews.map((item, index) => (
                                <tr>
                                    <td>{item.author}</td>
                                    <td>{item.content}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
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
            return (<div>
                Please wait
            </div>)
        }
    }
}
