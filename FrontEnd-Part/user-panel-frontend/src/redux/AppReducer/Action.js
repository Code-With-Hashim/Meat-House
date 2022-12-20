import axios from "axios";
import { useSelector } from "react-redux";
import * as type from "./ActionType";

const isDataLoding = {
  type: type.GET_DATA_REQUEST,
};

const isDataLodingSuccess = (payload) => {
  return {
    type: type.GET_DATA_SUCCESS,
    payload: payload,
  };
};
const isData = (payload) => {
  return {
    type: type.POST_CART_SUCCESS,
    payload: payload,
  };
};
const isDataLodingFailed = {
  type: type.GET_DATA_FAILURE,
};

export const getData = (payload) => (dispatch) => {
  dispatch(isDataLoding);
  dispatch(isDataLodingSuccess(payload));
  //   return axios
  //     .get("${process.env.REACT_APP_MEAT_HOUSE_BASE_URL}products", { params })
  //     .then(({ data }) => {
  //       return dispatch(isDataLodingSuccess(data));
  //     })
  // .catch((err) => {
  //   dispatch(isDataLodingFailed);
  // });
};
export const cartData = (payload) => (dispatch) => {
  // const USER_TOKEN = useSelector((store) => store.AuthReducer.token);
  // const AuthStr = `Bearer ${USER_TOKEN}`;
  console.log("Dispatch");
  dispatch(isData(payload))
  // return axios
  //   .get(`${process.env.REACT_APP_CART_URL}`, {
  //     headers: { Authorization: AuthStr },
  //   })
  //   .then((res) => {
  //     return dispatch(isData(res.data.Cart));
  //   })
  //   .catch((err) => {
  //     dispatch(isDataLodingFailed);
  //   });
};
