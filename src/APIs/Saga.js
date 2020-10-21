import * as actions from '../Actions/Action'
import * as ActionCall from '../Actions/ActionCall'
import * as APIs from './API'
import { put, call, takeLatest } from 'redux-saga/effects'

function* GetDefaultMovies(action) {
    try {
        let result = yield call(APIs.getDefaultMovies)
        yield put(ActionCall.GetMoviesResponse({
            payload: result
        }))
    } catch (ex) {
        console.log(ex);
    }
}

export function* WatchGetDefaultMovies() {
    yield takeLatest(actions.Request_Get_Default_Movie, GetDefaultMovies)
}


function* GetTextMatchMovies(action) {
    try {
        let result = yield call(APIs.getTextMatchMovies,action.payload)
        yield put(ActionCall.GetMoviesResponse({
            payload: result
        }))
    } catch (ex) {
        console.log(ex);
    }
}

export function* WatchGetTextMatchMovies() {
    yield takeLatest(actions.Request_Get_Text_Match_Movie, GetTextMatchMovies)
}


