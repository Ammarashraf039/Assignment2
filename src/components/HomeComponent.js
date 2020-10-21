import React, { Component, useCallback, UseState, useEffect, useState } from 'react'
import Movies from './Movies';
import Options from './Options'
import axios from 'axios'
import { API_KEY, API_KEY_TEXT, Basic_Url, Image_URL, Movie_URL, Query, Search_URL } from '../Constants/Constants';
import { GetMoviesRequest, GetTextMoviesRequest } from '../Actions/ActionCall'
import { connect } from 'react-redux'


const apiContext = React.createContext();

const HomeComponent = (props) => {



    const [movies, setMovies] = useState([])

    const [textToSearch, setTextToSearch] = useState('')

    const languages = [
        {
            name: 'All',
            code: '-1'
        },
        {
            name: 'English',
            code: 'en'
        },
        {
            name: 'Russian',
            code: 'ru'
        }
    ];

    useEffect(() => {
        setMovies(props.movies)
    }, [props.movies])



    useEffect(() => {
        if (textToSearch == '') {
            props.GetMoviesRequest()
        }
        else {
            props.GetTextMoviesRequest(textToSearch)
        }


    }, [textToSearch])

    const memoizedCallback = (text) => {
        setTextToSearch(text)
    }

    return (
        <apiContext.Provider value={{
            languageOptions: languages
            , languageChanged: memoizedCallback
            , textBaseSearch: memoizedCallback
            , moviesList: movies
        }}>
            <div>
                <div className="col-md-6 offset-2"><h2>All Movies  <span className="badge badge-pill badge-success">20</span></h2></div>
                <br />
                <Options />
                <Movies />
            </div>
        </apiContext.Provider>
    )

}

const mapStateToProps = (state) => {
    if (state.movies != undefined && state.movies.payload != undefined) {
        console.log(state.movies.payload);
        return { movies: state.movies.payload }
    }

    return { movies: [] }
}

export default connect(mapStateToProps, {
    GetMoviesRequest, GetTextMoviesRequest
})(HomeComponent);

export { apiContext }