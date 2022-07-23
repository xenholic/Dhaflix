import { FETCH_GENRES, FETCH_GENRE } from "./actionType";

const fetchGenres = () => {
    return (dispatch) => {
        fetch("https://dhaflix.herokuapp.com/genres")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error")
                }
                return res.json()
            })
            .then(data => dispatch(fetchGenresSuccess(data)))
            .catch(err => console.log(err))
    }
}

const fetchGenreId = (id) => {
    return (dispatch) => {
        return fetch(`https://dhaflix.herokuapp.com/genres/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error")
                }
                return res.json()
            })
            .then(data => dispatch(fetchGenreIdSuccess(data)))
            .catch(err => console.log(err))

    }
}

const addGenre = (data) => {
    return async (dispatch) => {
        await fetch("https://dhaflix.herokuapp.com/genres", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access_token": localStorage.getItem("access_token")
            },
            body: JSON.stringify(data)
        })
        dispatch(fetchGenres())
    }
}

const editGenre = (data, id) => {
    return (dispatch) => {
        fetch(`https://dhaflix.herokuapp.com/genres/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "access_token": localStorage.getItem("access_token")
            },
            body: JSON.stringify(data)
        })
    }
}

const deleteGenre = (id) => {
    return async (dispatch) => {
        await fetch(`https://dhaflix.herokuapp.com/genres/${id}`, {
            method: "DELETE",
            headers: {
                "access_token": localStorage.getItem("access_token")
            }
        })
        dispatch(fetchGenres())
    }
}

const fetchGenresSuccess = (data) => {
    return {
        type: FETCH_GENRES,
        data: data
    }
}

const fetchGenreIdSuccess = (data) => {
    return {
        type: FETCH_GENRE,
        data: data
    }
}

export { fetchGenres, addGenre, editGenre, deleteGenre, fetchGenreId }