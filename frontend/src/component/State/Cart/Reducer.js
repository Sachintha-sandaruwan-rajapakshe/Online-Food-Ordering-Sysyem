import {
  FIND_CART_REQUEST,
  FIND_CART_SUCCESS,
  FIND_CART_FAILURE,
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
  CLEAR_CART_FAILURE,
  GET_ALL_CART_ITEM_REQUEST,
  GET_ALL_CART_ITEM_SUCCESS,
  GET_ALL_CART_ITEM_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
} from "./ActionType";

import {LOGOUT} from '../Authentication/ActionType';

const initialState = {
  cart: null,
  cartItems: [],
  loading: false,
  error: null,
  message: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_CART_REQUEST:
    case GET_ALL_CART_ITEM_REQUEST:
    case ADD_ITEM_TO_CART_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
    case REMOVE_CART_ITEM_REQUEST:
    case CLEAR_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
      };

    case FIND_CART_SUCCESS:
      return {
        ...state,
        loading: false,
       // cart: action.payload,
        cartItems:action.payload.items,
      };

    case GET_ALL_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
      };

    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: [action.payload,...state.cartItems],
      };

    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.map((item) =>item.id === action.payload.id ? action.payload : item
        ),
      };

    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
        //cartItems:state.cartItems.map((item) => item.id ===action.payload.id? action.payload: item),
      };

    case CLEAR_CART_SUCCESS:
      return {
   
        ...state,
        loading: false,
        cart: action.payload,
        cartItems:action.payload.items,
      };

    case FIND_CART_FAILURE:
    case GET_ALL_CART_ITEM_FAILURE:
    case ADD_ITEM_TO_CART_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
    case REMOVE_CART_ITEM_FAILURE:
    case CLEAR_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem('jwt');
      return{...state,cartItems:[],cart:null,success:'logout success'};

    default:
      return state;
  }
};
