import { SIGNIN_ERROR, SIGNIN_LOADING, SIGNIN_SUCCESS, SIGNOUT_SUCCESS, SIGNUP_LOADING, SINGUP_ERROR } from "./Authenticated.types"

const token = localStorage.getItem('admin_token')

const initState = {
    loading: false,
    data: {
        token: token,
        isAuth: !!token,
    },
    error: false
}

export const AuthReducer = (state = initState, { payload, type }) => {

    

    switch (type) {

        case SIGNIN_SUCCESS: {

            localStorage.setItem("admin_token", payload)

            return {
                ...state,
                loading: false,
                data: {
                    token: payload,
                    isAuth: true,
                },
                signup_success: false,
                error: false
            }

        }
        case SIGNIN_LOADING: {

            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case SIGNIN_ERROR: {
            localStorage.clear('admin_token')

            return {
                ...state,
                data: {
                    token: null,
                    isAuth: false
                },
                loading: false,
                error: true
            }


        }

        case SIGNUP_LOADING: {
            return {
                ...state,
                loading: true,
                error: false,
                signup_success: false
            }
        }

        case SINGUP_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                signup_success: false
            }
        }

        case SIGNIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                signup_success: true
            }
        }
        case SIGNOUT_SUCCESS: {
            return {
                ...state,
                initState
            }
        }

        default: {
            return state
        }
    }

}
