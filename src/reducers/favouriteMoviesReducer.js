import * as actions from '../Actions/Action'

export default (state = [], action) => {
    switch (action.type) {
        case actions.Request_Add_Favourite_Movie:
            return state;
        case actions.Response_Add_Favourite_Movie:
            if (state.payload !== undefined) {
                return [
                    ...state.payload, action.payload
                ]
            }
            else {
                return [
                    ...state, action.payload
                ]
            }

        default:
            return state;
    }
}