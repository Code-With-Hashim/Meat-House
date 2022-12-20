import { useToast } from "@chakra-ui/react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { SIGNIN_ERROR, SIGNIN_LOADING, SIGNIN_SUCCESS, SIGNOUT_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS, } from "./Authenticated.types"

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

export const signout = () => ({ type: SIGNOUT_SUCCESS })