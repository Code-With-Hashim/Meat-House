// import axios from "axios";
// import * as type from "./ActionsType";

// const isDataLoding = {
//   type: type.GET_DATA_REQUEST,
// };

// const isDataLodingSuccess = (payload) => {
//   return {
//     type: type.GET_DATA_SUCCESS,
//     payload: payload,
//   };
// };

// const isDataLodingFailed = {
//   type: type.GET_DATA_FAILURE,
// };

// export const getData = (params) => (dispatch) => {
//   dispatch(isDataLoding);
//   return axios
//     .get("http://localhost:8080/products", { params })
//     .then(({ data }) => {
//       return dispatch(isDataLodingSuccess(data));
//     })
//     .catch((err) => {
//       dispatch(isDataLodingFailed);
//     });
// };
