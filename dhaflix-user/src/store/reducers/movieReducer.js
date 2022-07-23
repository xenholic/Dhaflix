import { FETCH_MOVIE, FETCH_MOVIES } from "../actions/actionType"

const inisialState = { movie: {}, movies: [] }

function movieReducer(state = inisialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, movies: action.data }
        case FETCH_MOVIE:
            return { ...state, movie: action.data }
        default:
            return state
    }
}

export default movieReducer