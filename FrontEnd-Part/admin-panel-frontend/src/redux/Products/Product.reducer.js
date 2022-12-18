import { GET_ALL_MAIN_PRODUCT_CATEGORY, GET_CATEGORY_ID } from "./Products.types"

const foodInitState = {
    data: [],
    category_id: ""
}

export const Product_reducer = (state = foodInitState, { type, payload }) => {

    switch (type) {
        case GET_ALL_MAIN_PRODUCT_CATEGORY: {
            return {
                ...state,
                data: payload
            }
        }
        case GET_CATEGORY_ID: {
            return {
                ...state,
                category_id: payload
            }
        }

        default: {
            return state
        }
    }


}