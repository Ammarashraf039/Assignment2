import * as actions from '../Actions/Action'

export default (state = [], action) => {
    
    switch (action.type) {
        case actions.Request_Get_Default_Movie:
            return state;

        case actions.Response_Get_Default_Movies:
            return {
                payload: action.payload.payload
            }

        case actions.Request_Get_Text_Match_Movie:
            return state;

        case actions.Response_Get_Text_Match_Movies:
            return {
                payload: action.payload.payload
            }

        default:
            return state;
    }
}