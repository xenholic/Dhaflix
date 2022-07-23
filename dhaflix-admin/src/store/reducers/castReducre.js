import { FETCH_CASTS } from "../actions/actionType";

const initialState = { casts: [] }

function castsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CASTS:
            return { ...state, casts: action.data }
        default:
            return state
    }
}

export default castsReducer