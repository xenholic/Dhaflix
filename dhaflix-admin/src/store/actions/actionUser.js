const login = (input) => {
    return (dispatch) => {
        return fetch(`https://dhaflix.herokuapp.com/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input)
        })
    }
}

const register = (input) => {
    return (dispatch) => {
        return fetch(`https://dhaflix.herokuapp.com/register`, {
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.getItem("access_token")
            },
            body: JSON.stringify(input)
        })
    }
}

export { login, register }