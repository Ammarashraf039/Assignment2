import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap'

export default class Options extends Component {
    render() {
        return (
            <div className="col-md-12" style={{ backgroundColor: '#ffc107', marginLeft: '-15xp' }}>
                <h2>
                    <span>List Filtering:</span>
                    <input type='text' placeholder='Title Search' ></input>
                    <span>Genre:</span>

                    <select name="movies" id="movies">
                        <option value="Action">Action</option>
                        <option value="Education">Education</option>
                        <option value="English">English</option>
                        <option value="Urdu">Urdu</option>
                    </select>

                    <br />  <br />
                    <span>Release Date:</span>
                    <select name="dates" id="dates">
                        <option value="All">All</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                    </select>

                    <span>Rating:</span>
                    <select name="dates" id="dates">
                        <option value="All">All</option>
                        <option value="9">9+</option>
                        <option value="8">8+</option>
                        <option value="7">7+</option>
                    </select>

                    <span>Sort By:</span>
                    <select name="dates" id="dates">
                        <option value="Popularity">Popularity</option>
                        <option value="ReleaseDate">Release Date</option>
                    </select>

                    <span>Language:</span>
                    <select name="dates" id="dates">
                        <option value="All">All</option>
                        <option value="English">English</option>
                        <option value="Urdu">Urdu</option>
                    </select>
                </h2>
            </div>
        )
    }
}
