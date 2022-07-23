import { combineReducers } from 'redux'
import movieReducer from './moviesReducer'
import genreReducer from './genreReducer'
import castsReducer from './castReducre'

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    casts: castsReducer
})

export default rootReducer