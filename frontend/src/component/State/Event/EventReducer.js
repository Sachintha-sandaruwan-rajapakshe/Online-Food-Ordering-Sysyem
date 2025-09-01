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
} from "./ActionTypes";

const initialState = {
  events: [],
  loading: false,
  error: null,
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT_REQUEST:
    case GET_RESTAURANT_EVENT_REQUEST:
    case DELETE_RESTAURANT_EVENT_REQUEST:
      return { ...state, loading: true, error: null };

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

    case DELETE_RESTAURANT_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        events: state.events.filter(
          (event) => event.id !== action.payload.id
        ),
      };

    case CREATE_EVENT_FAILURE:
    case GET_RESTAURANT_EVENT_FAILURE:
    case DELETE_RESTAURANT_EVENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
