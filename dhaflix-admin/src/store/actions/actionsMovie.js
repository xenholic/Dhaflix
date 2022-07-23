import { FETCH_MOVIE, FETCH_MOVIES } from "./actionType";

const fetchMovies = () => {
    return (dispatch) => {
        fetch("https://dhaflix.herokuapp.com/movies")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error")
                }
                return res.json()
            })
            .then(data => dispatch(fetchMoviesSuccess(data)))
            .catch(err => console.log(err))
    }
}

const fetchMovieById = (id) => {
    return (dispatch) => {
        console.log(id, "id ");
        fetch(`https://dhaflix.herokuapp.com/movies/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error")
                }
                return res.json()
            })
            .then(data => dispatch(fetchMovieSuccess(data)))
            .catch(err => console.log(err))
    }
}

const addMovie = (data) => {

    return (dispatch) => {
        if (!data.GenreId) {
            throw new Error(`Please Select Genre`)
        }
        fetch(`https://dhaflix.herokuapp.com/movies`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "access_token": localStorage.getItem("access_token")
            },
            body: JSON.stringify(data)
        })
    }
}

const editMovie = (data, id) => {
    return (dispatch) => {
        console.log(data, id, "dari action");
        fetch(`https://dhaflix.herokuapp.com/movies/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "access_token": localStorage.getItem("access_token")
            },
            body: JSON.stringify(data)
        })

    }
}

const deleteMovie = (id) => {
    return async (dispatch) => {

        await fetch(`https://dhaflix.herokuapp.com/movies/${id}`, {
            method: "DELETE",
            headers: {
                "access_token": localStorage.getItem("access_token")
            }
        })
        dispatch(fetchMovies())
    }
}

const fetchMoviesSuccess = (data) => {
    return {
        type: FETCH_MOVIES,
        data: data
    }
}
const fetchMovieSuccess = (data) => {
    return {
        type: FETCH_MOVIE,
        data: data
    }
}

export { fetchMovies, fetchMovieById, addMovie, editMovie, deleteMovie }