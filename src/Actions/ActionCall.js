import * as actions from './Action'
import * as APIs from '../APIs/API'

export function GetMoviesRequest() {
    return {
        type: actions.Request_Get_Default_Movie,
        payload: []
    }
}

export function GetMoviesResponse(payload) {
    return {
        type: actions.Response_Get_Default_Movies,
        payload: payload
    }
}

export function GetTextMoviesRequest(text) {
    return {
        type: actions.Request_Get_Text_Match_Movie,
        payload: text
    }
}

export function GetTextMoviesResponse(payload) {
    return {
        type: actions.Response_Get_Text_Match_Movies,
        payload: payload
    }
}

export function AddMovieRequest(movie) {
    return {
        type: actions.Response_Add_Favourite_Movie,
        payload: movie
    }
}

export function AddMovieResponse(payload) {
    return {
        type: actions.Response_Add_Favourite_Movie,
        payload: payload
    }
}