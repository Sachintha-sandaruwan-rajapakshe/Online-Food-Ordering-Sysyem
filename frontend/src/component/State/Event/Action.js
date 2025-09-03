import { api } from "../../config/api";
import { 
  CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, CREATE_EVENT_FAILURE,
  GET_RESTAURANT_EVENT_REQUEST, GET_RESTAURANT_EVENT_SUCCESS, GET_RESTAURANT_EVENT_FAILURE,
  DELETE_RESTAURANT_EVENT_REQUEST, DELETE_RESTAURANT_EVENT_SUCCESS, DELETE_RESTAURANT_EVENT_FAILURE,
  GET_EVENTS_BY_ALL_RESTAURANT_REQUEST,GET_EVENTS_BY_ALL_RESTAURANT_SUCCESS,GET_EVENTS_BY_ALL_RESTAURANT_FAILURE,
} from "./ActionTypes";

// Get events by restaurantId
export const getRestaurantEvents = ({ restaurentId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_EVENT_REQUEST });
    try {
      const { data } = await api.get(`/api/event/${restaurentId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("get restaurant events", data);
      dispatch({ type: GET_RESTAURANT_EVENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_RESTAURANT_EVENT_FAILURE,
        payload: error?.response?.data?.message || error.message,
      });
      console.log("get restaurant events error", error);
    }
  };
};

// Create event
export const createEvent = ({ restaurentId, reqData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_EVENT_REQUEST });
    try {
      const { data } = await api.post(`/api/admin/event/${restaurentId}`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("create event", data);
      dispatch({ type: CREATE_EVENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_EVENT_FAILURE,
        payload: error?.response?.data?.message || error.message,
      });
      console.log("create event error", error);
    }
  };
};

// Delete event
export const deleteRestaurantEvent = ({ eventId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANT_EVENT_REQUEST });
    try {
      const { data } = await api.delete(`/api/event/delete/${eventId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("delete event", data);
      dispatch({ type: DELETE_RESTAURANT_EVENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DELETE_RESTAURANT_EVENT_FAILURE,
        payload: error?.response?.data?.message || error.message,
      });
      console.log("delete event error", error);
    }
  };
};

export const getEventsByAllRestaurant = ({ jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_EVENTS_BY_ALL_RESTAURANT_REQUEST });
    try {
      const { data } = await api.get(`/api/event/all`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("all restaurant events", data);
      dispatch({ type: GET_EVENTS_BY_ALL_RESTAURANT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_EVENTS_BY_ALL_RESTAURANT_FAILURE,
        payload: error?.response?.data?.message || error.message,
      });
      console.log("get events by all restaurant error", error);
    }
  };
};
