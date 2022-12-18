import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Authenticated/Authenticated.reducer";
import { Product_reducer } from "./Products/Product.reducer";



const RootReducers = combineReducers({
    auth: AuthReducer,
    product: Product_reducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(RootReducers, createComposer(applyMiddleware(thunk)))