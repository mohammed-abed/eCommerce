import axios from "axios";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP_START,
  USER_LOGIN_START_ERROR,
  USER_LOGIN_START,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  USER_UPDATE_PROFILE_FAILED,
  USER_UPDATE_PROFILE_START,
  USER_UPDATE_PROFILE_SUCCESS,
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILED,
} from "./ConstTypeAction";
import API_URL from '../../APIUrl'
export const loginAction = (userData, History, pathname) => {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_START,
    });
    try {
      const response = await axios.post(`${API_URL}/users/login`, userData);
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
      History.push(pathname ? pathname : "/");
    } catch (e) {
      console.log(e.response);
      dispatch({
        payload: e?.response?.data?.message,
        type: USER_LOGIN_FAILED,
      });
    }
  };
};

export const handleError = () => {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_START_ERROR,
    });
  };
};

export const signUpAction = (userData, History) => {
  return async (dispatch) => {
    dispatch({
      type: USER_SIGNUP_START,
    });
    try {
      const response = await axios.post(`${API_URL}/users`, userData);
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
      History.push("/");
    } catch (e) {
      console.log(e.response);
      dispatch({
        payload: e.response.data.message,
        type: USER_SIGNUP_FAILED,
      });
    }
  };
};
export const getDataToProfileAction = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_PROFILE_START,
    });
    const state = getState();

    const {
      userDetails: {
        user: { token },
      },
    } = state;

    console.log("token: ", token);
    try {
      const response = await axios.get(`${API_URL}/users/profile`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e.response);
      dispatch({
        payload: e.response.data.message,
        type: GET_PROFILE_FAILED,
      });
    }
  };
};

export const updateProfileAction = (values, history) => {
  return async (dispatch, getState) => {
    dispatch({
      type: USER_UPDATE_PROFILE_START,
    });

    const {
      userDetails: {
        user: { token },
      },
    } = getState();
    console.log("update " + token);
    try {
      const response = await axios.put(`${API_URL}/users/profile`, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        payload: response.data,
        type: USER_UPDATE_PROFILE_SUCCESS,
      });
      console.log("After update " + token);

      history.push("/profile");
    } catch (e) {
      console.log(e.response);
      dispatch({
        payload: e?.response?.data?.message,
        type: USER_UPDATE_PROFILE_FAILED,
      });
    }
  };
};
export const addReviewAction = (values, id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: ADD_REVIEW_START,
    });

    const state = getState();

    const {
      userDetails: {
        user: { token },
      },
    } = state;

    try {
      const response = await axios.post(
        `${API_URL}/products/${id}/reviews`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({
        payload: response.data.message,
        type: ADD_REVIEW_SUCCESS,
      });
    } catch (e) {
      dispatch({
        payload: e?.response?.data?.message,
        type: ADD_REVIEW_FAILED,
      });
    }
  };
};
export const logoutAction = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
    payload: null,
  };
};
