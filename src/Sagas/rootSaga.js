import { spwan, all, fork } from 'redux-saga/effects'
import homeSaga from '../components/Home.Root.Saga'

export default function* root(){
    yield all([fork(homeSaga)])
}

