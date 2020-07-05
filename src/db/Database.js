import Axios from "axios";

// request header
Axios.interceptors.request.use(
  (config) => {
    config.headers = { Authorization: process.env.REACT_APP_AUTHORIZATION };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * añade varios asistentes a la vez
 *
 * @param {*} data array de asistentes
 */
export const createAll = (data) => {
  Axios.post(process.env.REACT_APP_API_URL + "/assistants/all", data)
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((err) => {
      console.dir(err.response.data.message);
    });
};

/**
 * añade un asistente a la vez
 *
 * @param {*} data asistente
 */
export const create = (data) => {
  Axios.post(process.env.REACT_APP_API_URL + "/assistants", data)
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((err) => {
      console.dir(err.response.data.message);
    });
};
