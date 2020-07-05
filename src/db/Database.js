import Axios from "axios";

// request header
Axios.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: process.env.REACT_APP_AUTHORIZATION,
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "application/json",
    };
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
export const createAll = async (data) => {
  try {
    const res = await Axios.post(
      process.env.REACT_APP_API_URL + "/assistants",
      data
    );
    return res.data;
  } catch (err) {
    return err.response.data.message;
  }
};

/**
 * añade un asistente a la vez
 *
 * @param {*} data asistente
 */
export const create = async (data) => {
  try {
    const res = await Axios.post(
      process.env.REACT_APP_API_URL + "/assistants/create",
      data
    );
    return res.data;
  } catch (err) {
    return err.response.data.message;
  }
};
