import { Basic_Url, Movie_URL, API_KEY_TEXT, API_KEY, Search_URL, Query } from '../Constants/Constants'
import axios  from 'axios'
import * as actions from '../Actions/Action'

export function getDefaultMovies() {
    let url = Basic_Url + Movie_URL + '?' + API_KEY_TEXT + '=' + API_KEY
    return axios.get(url)
        .then(response => {
            return response.data.results
        })
        .catch(e => {
            return []
        })
}

export function getTextMatchMovies(textToMatch) {
    let url = Search_URL + '?' + API_KEY_TEXT + '=' + API_KEY + Query + textToMatch
    return axios.get(url)
        .then(response => {
            return response.data.results
        })
        .catch(e => {
            return []
        })
}