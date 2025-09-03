import {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  GET_RESTAURANT_EVENT_REQUEST,
  GET_RESTAURANT_EVENT_SUCCESS,
  GET_RESTAURANT_EVENT_FAILURE,
  DELETE_RESTAURANT_EVENT_REQUEST,
  DELETE_RESTAURANT_EVENT_SUCCESS,
  DELETE_RESTAURANT_EVENT_FAILURE,
  GET_EVENTS_BY_ALL_RESTAURANT_REQUEST,
  GET_EVENTS_BY_ALL_RESTAURANT_SUCCESS,
  GET_EVENTS_BY_ALL_RESTAURANT_FAILURE,
} from "./ActionTypes";

const initialState = {
  events: [],
  loading: false,
  error: null,
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    // ------------------ Requests ------------------
    case CREATE_EVENT_REQUEST:
    case GET_RESTAURANT_EVENT_REQUEST:
    case DELETE_RESTAURANT_EVENT_REQUEST:
    case GET_EVENTS_BY_ALL_RESTAURANT_REQUEST:
      return { ...state, loading: true, error: null };

    // ------------------ Success ------------------
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        events: [...state.events, action.payload],
      };

    case GET_RESTAURANT_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload, // backend එකෙන් එන list එක
      };

    case GET_EVENTS_BY_ALL_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload, // backend එකෙන් එන list එක
      };

    case DELETE_RESTAURANT_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        events: state.events.filter(
          (event) => event.id !== action.payload.id
        ),
      };

    // ------------------ Failure ------------------
    case CREATE_EVENT_FAILURE:
    case GET_RESTAURANT_EVENT_FAILURE:
    case DELETE_RESTAURANT_EVENT_FAILURE:
    case GET_EVENTS_BY_ALL_RESTAURANT_FAILURE:
      return { 
        ...state,
        loading: false,
        error: action.payload 
      };

    // ------------------ Default ------------------
    default:
      return state;
  }
};
