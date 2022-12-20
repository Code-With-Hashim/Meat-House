import axios from "axios";
import * as type from "./ActionType";

const isAuthLoding = {
  type: type.GET_AUTH_REQUEST,
};

const isAuthSuccess = (payload) => {
  return {
    type: type.GET_AUTH_SUCCESS,
    payload: payload,
  };
};

export const isAuthFailed = {
  type: type.GET_AUTH_FAILURE,
};

export const logOut = {
  type: type.LOGOUT,
};

export const checkAuthenticaion = {
  type: type.CHECK_AUTH,
};

export const userSignup = (payload) => async (dispatch) => {
  dispatch(isAuthLoding);
  return axios
    .post(`${process.env.REACT_APP_MEAT_HOUSE_BASE_URL}usersData`, payload)
    .then(({ data }) => {
      dispatch(isAuthSuccess(data));
    });
};

export const userLogin = (payload) => async (dispatch) => {
  dispatch(isAuthLoding);
  console.log(payload);
  console.log("Making post request");
  axios
    .post(`${process.env.REACT_APP_MEAT_HOUSE_BASE_URL}user/login`, payload)
    .then((res) => {
      dispatch(isAuthSuccess(res.data));
    })
    .catch((err) => {
      dispatch(isAuthFailed);
      throw err;
    });
};

// export const getUserData = (token) => async (dispatch) => {
//   dispatch(isAuthLoding);
//   return axios
//     .get(`${process.env.REACT_APP_MEAT_HOUSE_BASE_URL}usersData/${token}`)
//     .then(({ data }) => {
//       dispatch(isAuthSuccess(data));
//     })
//     .catch(() => {
//       dispatch(isAuthFailed);
//     });
// };
