import React, { Component, useCallback, UseState, useEffect, useState } from 'react'
import Movies from './Movies';
import Options from './Options'
import axios from 'axios'
import { API_KEY, API_KEY_TEXT, Basic_Url, Image_URL, Movie_URL, Query, Search_URL } from '../Constants/Constants';



const apiContext = React.createContext();

const HomeComponent = (props) => {

    const [movies, setMovies] = useState([])

    const[textToSearch, setTextToSearch]=useState('')
    
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
        const url = Basic_Url + Movie_URL + '?' + API_KEY_TEXT + '=' + API_KEY
        axios.get(url)
            .then(response => {
                setMovies(response.data.results)
            })
            .catch(e => {
                setMovies([])
            })
    }, [])

    useEffect(() => {
        const url = Basic_Url + Movie_URL + '?' + API_KEY_TEXT + '=' + API_KEY
        if (textToSearch == '') {
            axios.get(url)
                .then(response => {
                    setMovies(response.data.results)
                })
                .catch(e => {
                    setMovies([])
                })
        }
        else {
            let url = Search_URL + '?' + API_KEY_TEXT + '=' + API_KEY + Query + textToSearch
            axios.get(url)
                .then(response => {
                    setMovies(response.data.results)
                })
                .catch(e => {
                    setMovies([])
                })
        }


    }, [textToSearch])

    const memoizedCallback = (text)=>{
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

class HomeComponents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isLoading: false,
            error: '',
            textToSearch: '',
            languages: [
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
            ]
        }

        this.languageChagned = this.languageChagned.bind(this)
        this.textSearch = this.textSearch.bind(this)
    }

    languageChagned(language) {
        if (language === '-1') {
            this.defaultMovies()
        }
        else {
            this.defaultMovies()
        }
    }


    textSearch(text) {
        if (text === '') {
            this.defaultMovies()
        }
        else {
            this.nameSearchMovies(text);
        }
    }

    componentDidMount() {
        this.defaultMovies()
    }

    defaultMovies() {
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

    nameSearchMovies(text) {
        try {
            this.setState({
                error: '',
                isLoading: true,
                movies: []
            })

            let url = Search_URL + '?' + API_KEY_TEXT + '=' + API_KEY + Query + text
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
        return (
            <apiContext.Provider value={{
                languageOptions: this.state.languages
                , languageChanged: this.languageChagned
                , textBaseSearch: this.textSearch
                , moviesList: this.state.movies
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
}

export default HomeComponent;

export { apiContext }