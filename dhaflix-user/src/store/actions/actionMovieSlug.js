import { FETCH_MOVIE } from "./actionType";

const fetchMoviesBySlug = (slug) => {
    return (dispatch) => {
        fetch(`https://dhaflix.herokuapp.com/movies/${slug}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error")
                }
                return res.json()
            })
            .then(data => dispatch(getMoviesBySlug(data)))
            .catch(err => console.log(err))
    }
}

function getMoviesBySlug(data) {
    return {
        type: FETCH_MOVIE,
        data: data,
    };
}


export default fetchMoviesBySlug