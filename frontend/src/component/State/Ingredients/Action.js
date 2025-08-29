import { api } from "../../config/api";
import { 
  CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS,
  CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_INGREDIENTS, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS,
  UPDATE_STOCK 
} from "./ActionType";

export const getIngredientsOfRestaurent = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/api/admin/ingredients/restaurent/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("get ingredient of restaurent", response.data);
      dispatch({ type: GET_INGREDIENTS, payload: response.data });
    } catch (error) {
      dispatch({
        type: CREATE_ORDER_FAILURE,  // Note: CREATE_ORDER_FAILURE is not defined here, should fix
        payload: error?.response?.data?.message || error.message,
      });
      console.log("get ingredient of restaurent error", error);
    }
  };
};

export const createIngredient = ({ reqData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_INGREDIENT_REQUEST });
    try {
      const response = await api.post(`/api/admin/ingredients`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("create Ingredient", response.data);
      dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: CREATE_INGREDIENT_FAILURE,
        payload: error?.response?.data?.message || error.message,
      });
      console.log("create Ingredient error", error);
    }
  };
};

export const createIngredientCategory = ({ reqData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_INGREDIENT_CATEGORY_REQUEST });
    try {
      const response = await api.post(`/api/admin/ingredients/category`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("create Ingredient category", response.data);
      dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: CREATE_INGREDIENT_CATEGORY_FAILURE,
        payload: error?.response?.data?.message || error.message,
      });
      console.log("create Ingredient category error", error);
    }
  };
};

export const getIngredientCategory = ({ id, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_INGREDIENT_CATEGORY_REQUEST });
    try {
      const response = await api.get(`/api/admin/ingredients/restaurent/${id}/category`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("get Ingredient category", response.data);
      dispatch({ type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: GET_INGREDIENT_CATEGORY_FAILURE,
        payload: error?.response?.data?.message || error.message,
      });
      console.log("get Ingredient category error", error);
    }
  };
};

export const updateStockOfIngredient = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/api/admin/ingredients/${id}/stock`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("update Ingredient stock", response.data);
      dispatch({ type: UPDATE_STOCK, payload: response.data });
    } catch (error) {
      console.log("update Ingredient stock error", error);
    }
  };
};
