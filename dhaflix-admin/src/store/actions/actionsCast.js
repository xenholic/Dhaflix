import { FETCH_CASTS } from "./actionType";

const fetchCasts = () => {
    return (dispatch) => {
        fetch("https://dhaflix.herokuapp.com/casts")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error")
                }
                return res.json()
            })
            .then(data => dispatch(fetchCastsSuccess(data)))
            .catch(err => console.log(err))
    }
}

const deleteCast = (id) => {
    return async (dispatch) => {
        await fetch(`https://dhaflix.herokuapp.com/casts/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "access_token": localStorage.getItem("access_token")
            }
        })
        dispatch(fetchCasts())
    }
}

const fetchCastsSuccess = (data) => {
    return {
        type: FETCH_CASTS,
        data: data
    }
}


export { fetchCasts, deleteCast } 