import { getFromLS, saveToLS } from "../../Utils/Constants";
import * as ways from "./ActionType";

const token = localStorage.getItem('token')

const initialState = {
  isAuth: !!token,
  isLoding: false,
  isError: false,
  user: {},
  token: token
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ways.GET_AUTH_REQUEST:
      return { ...state, isLoding: true };

    case ways.GET_AUTH_SUCCESS:
      localStorage.setItem('token' , payload.token)
      console.log(payload.token)

      return {
        ...state,
        isLoding: false,
        isAuth: true,
        isError: false,
        token: payload.token,
      };
    case ways.GET_AUTH_FAILURE:
      return {
        ...state,
        isError: true,
        isAuth: false,
        isLoding: false,
      };
    case ways.LOGOUT:
      localStorage.clear('token')
      return { ...state, isError : false , isAuth: false, user: {} };
    case ways.CHECK_AUTH:
      return { ...state, isAuth: state.user.firstName ? true : false };
    default:
      return state;
  }
}

export { Reducer };
