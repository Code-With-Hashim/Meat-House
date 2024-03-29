import * as ways from "./ActionType";

const initialState = {
  isLoding: false,
  isError: false,
  city: "",
  cart:true
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ways.GET_DATA_REQUEST:
      return { ...state, isLoding: true };
    case ways.GET_DATA_SUCCESS:
      return { ...state, isLoding: false, isError: false, city: payload };
    case ways.GET_DATA_FAILURE:
      return { ...state, isError: false, data: [], isLoding: false };
      case ways.POST_CART_SUCCESS:
        console.log(payload)
      return { ...state, isLoding: false, isError: false, cart: payload };
    default:
      return state;
  }
}

export { Reducer };
