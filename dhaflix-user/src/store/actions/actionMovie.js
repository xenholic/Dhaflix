import { FETCH_MOVIES } from "./actionType";

const fetchMovies = () => {
    return (dispatch) => {
        fetch("https://dhaflix.herokuapp.com/movies")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error")
                }
                return res.json()
            })
            .then(data => {

                dispatch(getMovies(data))
            })
            .catch(err => console.log(err))
    }
}

function getMovies(data) {
    return {
        type: FETCH_MOVIES,
        data: data,
    };
}


export default fetchMovies