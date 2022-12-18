import axios from "axios"
import { SIGNIN_ERROR, SIGNIN_LOADING, SIGNIN_SUCCESS, SIGNOUT_SUCCESS, SIGNUP_LOADING, SINGUP_SUCESS } from "./Authenticated.types"

export const login = (creds) => async (dispatch) => {


    dispatch({ type: SIGNIN_LOADING })

    try {


        const res = await axios.post(`${process.env.REACT_APP_ADMIN_BASE_URL}login`, creds)

        const { data } = await res

        if (data.token) {
            dispatch({ type: SIGNIN_SUCCESS, payload: data.token })
        }


    } catch (error) {
        console.log(error)
        dispatch({ type: SIGNIN_ERROR })

    }

}


export const signup = (payload) => async (dispatch) => {

    dispatch({type : SIGNUP_LOADING})
    try {
        
        const res = await axios.post(`${process.env.REACT_APP_ADMIN_BASE_URL}signup` , payload)

        dispatch({type : SINGUP_SUCESS})

    } catch (error) {
        console.log(error)
        dispatch({type : SIGNIN_ERROR})
    }


}

export const signout = () => ({type : SIGNOUT_SUCCESS })