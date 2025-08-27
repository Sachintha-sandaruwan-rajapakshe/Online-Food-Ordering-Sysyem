import { api } from "../../config/api";
import {
  GET_ALL_RESTAURANTS_REQUEST,
  GET_ALL_RESTAURANTS_SUCCESS,
  GET_ALL_RESTAURANTS_FAILURE,
  GET_RESTAURANT_BY_ID_REQUEST,
  GET_RESTAURANT_BY_ID_SUCCESS,
  GET_RESTAURANT_BY_ID_FAILURE,
  GET_RESTAURANT_BY_USER_ID_REQUEST,
  GET_RESTAURANT_BY_USER_ID_SUCCESS,
  GET_RESTAURANT_BY_USER_ID_FAILURE,
  CREATE_RESTAURANT_REQUEST,
  CREATE_RESTAURANT_SUCCESS,
  CREATE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_REQUEST,
  UPDATE_RESTAURANT_SUCCESS,
  UPDATE_RESTAURANT_FAILURE,
  DELETE_RESTAURANT_REQUEST,
  DELETE_RESTAURANT_SUCCESS,
  DELETE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_STATUS_REQUEST,
  UPDATE_RESTAURANT_STATUS_SUCCESS,
  UPDATE_RESTAURANT_STATUS_FAILURE,
  CREATE_EVENTS_REQUEST,
  CREATE_EVENTS_SUCCESS,
  CREATE_EVENTS_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  DELETE_EVENTS_REQUEST,
  DELETE_EVENTS_SUCCESS,
  DELETE_EVENTS_FAILURE,
  GET_RESTAURANT_EVENTS_REQUEST,
  GET_RESTAURANT_EVENTS_SUCCESS,
  GET_RESTAURANT_EVENTS_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  GET_RESTAURANT_CATEGORIES_REQUEST,
  GET_RESTAURANT_CATEGORIES_SUCCESS,
  GET_RESTAURANT_CATEGORIES_FAILURE
} from "./ActionTypes";

export const getAllRestaurentsAction = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });

    try {
      const { data } = await api.get("/api/restaurents", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data });
      console.log("all restaurents", data);
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error });
    }
  };
};

export const getRestaurentById = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
    try {
      const response = await api.get(`api/restaurents/${reqData.restaurentId}`, {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });
      dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
    }
  };
};

export const getRestaurentByUserId = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
    try {
      const { data } = await api.get(`/api/admin/restaurents/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data });
      console.log("getRestaurentByUserId successs", data);
    } catch (error) {
      console.log("getRestaurentByUserId error", error);
      dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error });
    }
  };
};

export const createRestaurent = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST });
    try {
      const { data } = await api.post(`/api/admin/restaurents`, reqData.data, {
        headers: {
          Authorization: `Bearer ${reqData.token}`,
        },
      });
      dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data });
      console.log("restaurent create", data);
    } catch (error) {
      console.log("restaurent create error", error);
      dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const updateRestaurent = ({ restaurentId, resturentData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_REQUEST });
    try {
      const res = await api.put(`/api/admin/restaurents/${restaurentId}`, resturentData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: res.data });
      console.log("update restaurent details", res);
    } catch (error) {
      console.log("update restaurent details error", error);
      dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const deleteRestaurent = ({ restaurentId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANT_REQUEST });
    try {
      const res = await api.delete(`/api/admin/restaurents/${restaurentId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: restaurentId });
      console.log("delete restaurent", res);
    } catch (error) {
      console.log("delete restaurent error", error);
      dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const updateRestaurentStatus = ({ restaurentId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
    try {
      const res = await api.put(`/api/admin/restaurents/${restaurentId}/status`, {}, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: res.data });
      console.log("update restaurent status", res);
    } catch (error) {
      console.log("update restaurent status error", error);
      dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
    }
  };
};

export const createEventAction = ({ data, jwt, restaurentId }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });
    try {
      const res = await api.post(`/api/admin/events/restaurent/${restaurentId}`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_EVENTS_SUCCESS, payload: res.data });
      console.log("create event", res);
    } catch (error) {
      dispatch({ type: CREATE_EVENTS_FAILURE, payload: error });
      console.log("create event error", error);
    }
  };
};

export const getAllEvent = ({ jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });
    try {
      const res = await api.get(`/api/events`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data });
      console.log("get all event", res);
    } catch (error) {
      dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });
      console.log("get all event error", error);
    }
  };
};

export const deleteEvent = ({ eventId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_EVENTS_REQUEST });
    try {
      await api.delete(`/api/admin/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: DELETE_EVENTS_SUCCESS, payload: eventId });
      console.log("delete event successful");
    } catch (error) {
      console.log("delete event error", error);
      dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });
    }
  };
};

export const getRestaurentEvent = ({ restaurentId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_EVENTS_REQUEST });
    try {
      const res = await api.get(`/api/admin/events/restaurent/${restaurentId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_RESTAURANT_EVENTS_SUCCESS, payload: res.data });
      console.log("restaurent event successful");
    } catch (error) {
      console.log("restaurent event error", error);
      dispatch({ type: GET_RESTAURANT_EVENTS_FAILURE, payload: error });
    }
  };
};

export const createCategoryAction = ({ reqData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    try {
      const res = await api.post(`/api/admin/category`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data });
      console.log("category create successful");
    } catch (error) {
      console.log("category create error", error);
      dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
    }
  };
};

export const getRestaurentCategory = ({ restaurentId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_CATEGORIES_REQUEST });
    try {
      const res = await api.get(`/api/category/restaurent/${restaurentId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_RESTAURANT_CATEGORIES_SUCCESS, payload: res.data });
      console.log("restaurent category successful");
    } catch (error) {
      console.log("restaurent category error", error);
      dispatch({ type: GET_RESTAURANT_CATEGORIES_FAILURE, payload: error });
    }
  };
};
