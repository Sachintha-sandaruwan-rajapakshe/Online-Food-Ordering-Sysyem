import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_USER_ORDERS_REQUEST,
  GET_USER_ORDERS_SUCCESS,
  GET_USER_ORDERS_FAILURE,
} from "./ActionType";

const initialState = {
  loading: false,
  error: null,
  success: false,
  order: null,
  userOrders: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
    case GET_USER_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
        success: true,
      };

    case GET_USER_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        userOrders: action.payload,
        success: true,
      };

    case CREATE_ORDER_FAILURE:
    case GET_USER_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };

    default:
      return state;
  }
};
