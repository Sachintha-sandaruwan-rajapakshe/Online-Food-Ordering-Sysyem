import { api } from "../../config/api";
import {
  GET_ALL_RESATURENTS_REQUEST,
  GET_ALL_RESATURENTS_SUCCESS,
  GET_ALL_RESATURENTS_FAILURE,
  GET_RESTAURENT_BY_ID_REQUEST,
  GET_RESTAURENT_BY_ID_SUCCESS,
  GET_RESTAURENT_BY_ID_FAILURE,
  GET_RESTAURENT_BY_USER_ID_REQUEST,
  GET_RESTAURENT_BY_USER_ID_SUCCESS,
  GET_RESTAURENT_BY_USER_ID_FAILURE,
  CREATE_RESTAURENT_REQUEST,
  CREATE_RESTAURENT_SUCCESS,
  CREATE_RESTAURENT_FAILURE,
  UPDATE_RESTAURENT_REQUEST,
  UPDATE_RESTAURENT_SUCCESS,
  UPDATE_RESTAURENT_FAILURE,
  DELETE_RESTAURENT_REQUEST,
  DELETE_RESTAURENT_SUCCESS,
  DELETE_RESTAURENT_FAILURE,
  UPDATE_RESTAURENT_STATUS_REQUEST,
  UPDATE_RESTAURENT_STATUS_SUCCESS,
  UPDATE_RESTAURENT_STATUS_FAILURE,
  CREATE_EVENTS_REQUEST,
  CREATE_EVENTS_SUCCESS,
  CREATE_EVENTS_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  DELETE_EVENTS_REQUEST,
  DELETE_EVENTS_SUCCESS,
  DELETE_EVENTS_FAILURE,
  GET_RESTAURENTS_EVENTS_REQUEST,
  GET_RESTAURENTS_EVENTS_SUCCESS,
  GET_RESTAURENTS_EVENTS_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  GET_RESTAURENTS_CATEGORY_REQUEST,
  GET_RESTAURENTS_CATEGORY_SUCCESS,
  GET_RESTAURENTS_CATEGORY_FAILURE
} from "./ActionTypes";

export const getAllRestaurentsAction = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RESATURENTS_REQUEST });

    try {
      const { data } = await api.get("/api/restaurents", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: GET_ALL_RESATURENTS_SUCCESS, payload: data });
      console.log("all restaurents", data);
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: GET_ALL_RESATURENTS_FAILURE, payload: error });
    }
  };
};

export const getRestaurentById = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURENT_BY_ID_REQUEST });
    try {
      const response = await api.get(`/api/restaurents/${reqData.restaurentId}`, {
        headers: {
          authorization: `bearer ${reqData.jwt}`,
        },
      });
      dispatch({ type: GET_RESTAURENT_BY_ID_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: GET_RESTAURENT_BY_ID_FAILURE, payload: error });
    }
  };
};

export const getRestaurentByUserId = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURENT_BY_USER_ID_REQUEST });
    try {
      const { data } = await api.get(`/api/admin/restaurent/user`, {
        headers: {
          authorization: `bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_RESTAURENT_BY_USER_ID_SUCCESS, payload: data });
    } catch (error) {
      console.log("getRestaurentByUserId error", error);
      dispatch({ type: GET_RESTAURENT_BY_USER_ID_FAILURE, payload: error });
    }
  };
};

export const createRestaurent = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_RESTAURENT_REQUEST });
    try {
      const { data } = await api.post(`/api/admin/restaurents`, reqData.data, {
        headers: {
          authorization: `bearer ${reqData.token}`,
        },
      });
      dispatch({ type: CREATE_RESTAURENT_SUCCESS, payload: data });
      console.log("restaurent create", data);
    } catch (error) {
      console.log("restaurent create error", error);
      dispatch({ type: CREATE_RESTAURENT_FAILURE, payload: error });
    }
  };
};

export const updateRestaurent = ({ restaurentId, resturentData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURENT_REQUEST });
    try {
      const res = await api.put(`/api/admin/restaurents/${restaurentId}`, resturentData, {
        headers: {
          authorization: `bearer ${jwt}`,
        },
      });
      dispatch({ type: UPDATE_RESTAURENT_SUCCESS, payload: res.data });
      console.log("update restaurent details", res);
    } catch (error) {
      console.log("update restaurent details error", error);
      dispatch({ type: UPDATE_RESTAURENT_FAILURE, payload: error });
    }
  };
};

export const deleteRestaurent = ({ restaurentId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_RESTAURENT_REQUEST });
    try {
      const res = await api.delete(`/api/admin/restaurents/${restaurentId}`, {
        headers: {
          authorization: `bearer ${jwt}`,
        },
      });
      dispatch({ type: DELETE_RESTAURENT_SUCCESS, payload: restaurentId });
      console.log("delete restaurent", res);
    } catch (error) {
      console.log("delete restaurent error", error);
      dispatch({ type: DELETE_RESTAURENT_FAILURE, payload: error });
    }
  };
};

export const updateRestaurentStatus = ({ restaurentId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURENT_STATUS_REQUEST });
    try {
      const res = await api.put(`/api/restaurents/${restaurentId}/status`, {}, {
        headers: {
          authorization: `bearer ${jwt}`,
        },
      });
      dispatch({ type: UPDATE_RESTAURENT_STATUS_SUCCESS, payload: res.data });
      console.log("update restaurent status", res);
    } catch (error) {
      console.log("update restaurent status error", error);
      dispatch({ type: UPDATE_RESTAURENT_STATUS_FAILURE, payload: error });
    }
  };
};

export const createEventAction = ({ data, jwt, restaurentId }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });
    try {
      const res = await api.post(`/api/admin/events/restaurent/${restaurentId}`, data, {
        headers: {
          authorization: `bearer ${jwt}`,
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
          authorization: `bearer ${jwt}`,
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
          authorization: `bearer ${jwt}`,
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
    dispatch({ type: GET_RESTAURENTS_EVENTS_REQUEST });
    try {
      const res = await api.get(`/api/admin/events/restaurent/${restaurentId}`, {
        headers: {
          authorization: `bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_RESTAURENTS_EVENTS_SUCCESS, payload: res.data });
      console.log("restaurent event successful");
    } catch (error) {
      console.log("restaurent event error", error);
      dispatch({ type: GET_RESTAURENTS_EVENTS_FAILURE, payload: error });
    }
  };
};

export const createCategoryAction = ({ reqData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    try {
      const res = await api.post(`/api/admin/category`, reqData, {
        headers: {
          authorization: `bearer ${jwt}`,
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
    dispatch({ type: GET_RESTAURENTS_CATEGORY_REQUEST });
    try {
      const res = await api.get(`/api/category/restaurent/${restaurentId}`, {
        headers: {
          authorization: `bearer ${jwt}`,
        },
      });
      dispatch({ type: GET_RESTAURENTS_CATEGORY_SUCCESS, payload: res.data });
      console.log("restaurent category successful");
    } catch (error) {
      console.log("restaurent category error", error);
      dispatch({ type: GET_RESTAURENTS_CATEGORY_FAILURE, payload: error });
    }
  };
};
