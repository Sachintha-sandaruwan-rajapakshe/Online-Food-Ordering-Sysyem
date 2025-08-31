import {
  GET_RESTAURANT_ORDER_REQUEST,
  GET_RESTAURANT_ORDER_SUCCESS,
  GET_RESTAURANT_ORDER_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
} from "./ActionType";

const initialState = {
  loading: false,
  error: null,
  orders: [],
  updateSuccess: false,
};

export const restaurantOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT_ORDER_REQUEST:
    case UPDATE_ORDER_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        updateSuccess: false,
      };

    case GET_RESTAURANT_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
        error: null,
      };

    case UPDATE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: state.orders.map((order) =>order.id === action.payload.id ? action.payload : order),
        updateSuccess: true,
        error: null,
        // Optional: update local orders list if needed
      };

    case GET_RESTAURANT_ORDER_FAILURE:
    case UPDATE_ORDER_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updateSuccess: false,
      };

    default:
      return state;
  }
};
