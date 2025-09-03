import * as actionTypes from "./ActionType";

const initialState = {
  ingredients: [],
  ingredientCategories: [],
  loading: false,
  error: null,
  stockUpdatedIngredient: null,
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
        loading: false,
        error: null,
      };

    case actionTypes.UPDATE_STOCK:
      return {
        ...state,
        stockUpdatedIngredient: action.payload,
        ingredients: state.ingredients.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        loading: false,
        error: null,
      };

    case actionTypes.CREATE_INGREDIENT_REQUEST:
    case actionTypes.CREATE_INGREDIENT_CATEGORY_REQUEST:
    case actionTypes.GET_INGREDIENT_CATEGORY_REQUEST:
    case actionTypes.DELETE_INGREDIENT_CATEGORY_REQUEST: // added
    case actionTypes.DELETE_INGREDIENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.CREATE_INGREDIENT_SUCCESS:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
        loading: false,
        error: null,
      };

    case actionTypes.CREATE_INGREDIENT_CATEGORY_SUCCESS:
      return {
        ...state,
        ingredientCategories: [...state.ingredientCategories, action.payload],
        loading: false,
        error: null,
      };

    case actionTypes.GET_INGREDIENT_CATEGORY_SUCCESS:
      return {
        ...state,
        ingredientCategories: action.payload,
        loading: false,
        error: null,
      };

    case actionTypes.DELETE_INGREDIENT_CATEGORY_SUCCESS: // added
      return {
        ...state,
        loading: false,
        ingredientCategories: state.ingredientCategories.filter(
          (item) => item.id !== action.payload.id
        ),
        error: null,
      };

    case actionTypes.DELETE_INGREDIENT_SUCCESS: // added
      return {
        ...state,
        loading: false,
        ingredients: state.ingredients.filter(
          (item) => item.id !== action.payload.id
        ),
        error: null,
      };

    case actionTypes.CREATE_INGREDIENT_FAILURE:
    case actionTypes.CREATE_INGREDIENT_CATEGORY_FAILURE:
    case actionTypes.GET_INGREDIENT_CATEGORY_FAILURE:
    case actionTypes.DELETE_INGREDIENT_CATEGORY_FAILURE: // added
    case actionTypes.DELETE_INGREDIENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
