import { getFromLS, saveToLS } from "../../Utils/Constants";
import * as ways from "./ActionType";

const initialState = {
  isAuth: getFromLS("token") ? true : false,
  isLoding: false,
  isError: false,
  user: {},
  token: getFromLS("token") || "",
};
function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ways.GET_AUTH_REQUEST:
      return { ...state, isLoding: true };
    case ways.GET_AUTH_SUCCESS:
      console.log(payload);
      saveToLS("token", payload.token);

      return {
        ...state,
        isLoding: false,
        isAuth: true,
        isError: false,
        user: payload,
        token: payload,
      };
    case ways.GET_AUTH_FAILURE:
      return {
        ...state,
        isError: false,
        token: "",
        isAuth: false,
        isLoding: false,
      };
    case ways.LOGOUT:
      saveToLS("token", undefined);
      return { ...state, isAuth: false, user: {} };
    case ways.CHECK_AUTH:
      return { ...state, isAuth: state.user.firstName ? true : false };
    default:
      return state;
  }
}

export { Reducer };
