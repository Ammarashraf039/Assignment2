import { spawn, all } from 'redux-saga/effects'
import {WatchGetDefaultMovies, WatchGetTextMatchMovies} from '../APIs/Saga'

export default function* rootSaga() {
    yield all([spawn(WatchGetDefaultMovies)])
    yield all([spawn(WatchGetTextMatchMovies)])
}