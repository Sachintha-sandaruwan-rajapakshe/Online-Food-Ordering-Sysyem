import { api } from "../../config/api";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEM_FAILURE, GET_ALL_CART_ITEM_REQUEST, GET_ALL_CART_ITEM_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType";

export const findCart =(token)=>{
    return async (dispatch)=>{
        dispatch({type:FIND_CART_REQUEST});
        try {
            const response =await api.get(`/api/cart`,{
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            })
            console.log('find cart success',response.data)
            dispatch({type:FIND_CART_SUCCESS,payload:response.data});
        } catch (error) {
            dispatch({type:FIND_CART_FAILURE,payload:error?.response?.data?.message || error.message});
            console.log('find cart error',error)
        }
    };
};

export const getAllCartItem =(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:GET_ALL_CART_ITEM_REQUEST});
        try {
            const response =await api.get(`/api/carts/${reqData.cartId}/items`,{
                headers:{
                    Authorization:`Bearer ${reqData.token}`,
                }
            })
            console.log('all cart item success',response.data)
            dispatch({type:GET_ALL_CART_ITEM_SUCCESS,payload:response.data});
        } catch (error) {
            dispatch({type:GET_ALL_CART_ITEM_FAILURE,payload:error?.response?.data?.message || error.message});
            console.log('all cart item error',error)
        }
    };
};

export const addItemToCart =(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:ADD_ITEM_TO_CART_REQUEST});
        try {
            const response =await api.post(`/api/cart/add`,reqData.cartItem,{
                headers:{
                    Authorization:`Bearer ${reqData.token}`,
                }
            })
            console.log('all cart item success',response.data)
            dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:response.data});
        } catch (error) {
            dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error?.response?.data?.message || error.message});
            console.log('all cart item error',error)
        }
    };
};

export const updateCartItem =(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_CART_ITEM_REQUEST});
        try {
            const response =await api.put(`/api/cart-item/update`,reqData.cartItem,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`,
                }
            })
            console.log('all cart item success',response.data)
            dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:response.data});
        } catch (error) {
            dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:error?.response?.data?.message || error.message});
            console.log('all cart item error',error)
        }
    };
};

export const removeCartItem =({cartItemId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:REMOVE_CART_ITEM_REQUEST});
        try {
            const response =await api.delete(`/api/cart-item/${cartItemId}/remove`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            })
            console.log(' cart item remove',response.data)
            dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:response.data});
        } catch (error) {
            dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error?.response?.data?.message || error.message});
            console.log('cart item remove error',error)
        }
    };
};

export const clearCartAction =()=>{
    return async (dispatch)=>{
        dispatch({type:CLEAR_CART_REQUEST});
        try {
            const response =await api.put(`/api/cart/clear`,{},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('jwt')}`,
                }
            })
            console.log(' cart cleared',response.data)
            dispatch({type:CLEAR_CART_SUCCESS,payload:response.data});
        } catch (error) {
            dispatch({type:CLEAR_CART_FAILURE,payload:error?.response?.data?.message || error.message});
            console.log('cart item remove error',error)
        }
    };
};

