import axios from "axios";
import * as type from "./ActionType";

const isAuthLoding = {
  type: type.GET_AUTH_REQUEST,
};

const isAuthSuccess = (value) => (dispatch) => {
  // console.log(value , dispatch)
  dispatch({
    type: type.GET_AUTH_SUCCESS,
    payload: value
  })
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
    }).catch((err) => {
      dispatch(isAuthFailed)
    });
};

export const userLogin = (payload, toast, onclose, navigate) => async (dispatch) => {
  dispatch(isAuthLoding);


  try {

    const { data } = await axios.post(`${process.env.REACT_APP_MEAT_HOUSE_BASE_URL}user/login`, payload)

    dispatch(isAuthSuccess(data))

    toast({
      position: "top",
      variant: "subtle",
      title: "Login Successfully",
      status: "success",
      isClosable: true,
    });

    navigate("/")
    onclose()


  } catch (error) {
    console.log(error)
    dispatch(isAuthFailed)


    toast({
      position: "top",
      variant: "subtle",
      title: "Something went wrong , Please try again",
      status: "error",
      isClosable: true,
    });
  }

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
