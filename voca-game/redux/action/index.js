import { register, test } from "../features/auth-slice";


const baseUrl = 'http://localhost:3001/authors'

export function registerUser(userData) {
    return (dispatch) => {
        fetch(baseUrl, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                access_token: localStorage.getItem("access_token"),
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Internal Server Error");
                return response.json();
            })
            .then((data) => {
                console.log(data)
                dispatch(register(data))
                // dispatch(test())

            })
            .catch((err) => console.log(err));
    };
}

