import { FETCH_GENRES, FETCH_GENRE } from "../actions/actionType";

const initialState = { genres: [], genre: {} }

function genreReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_GENRE:
            return { ...state, genre: action.data }
        case FETCH_GENRES:
            return { ...state, genres: action.data }
        default:
            return state
    }
}

export default genreReducer