import axios from "axios"
import { GET_ALL_MAIN_PRODUCT_CATEGORY, GET_CATEGORY_ID } from "./Products.types"

export const getAllProduct = (token) => async (dispatch) => {
    try {

        const res = await axios.get(`${process.env.REACT_APP_ADMIN_BASE_URL}products`, {
            
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'multipart/form-data' 
                
            }
        })

        const { data } = res

        dispatch({ type: GET_ALL_MAIN_PRODUCT_CATEGORY, payload: data })

    } catch (error) {

        console.log(error)

    }
}

export const category = (id) => ({type : GET_CATEGORY_ID , payload : id})