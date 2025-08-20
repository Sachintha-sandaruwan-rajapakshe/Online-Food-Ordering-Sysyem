
import { api} from "../../config/api"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USER_ORDERS_FAILURE, GET_USER_ORDERS_REQUEST, GET_USER_ORDERS_SUCCESS } from "./ActionType";

export const createOrder =(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:CREATE_ORDER_REQUEST});
        try {
            const {data} =await api.post(`/api/order`,reqData.order,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`,
                }
            })
            if(data.payment_url){
                window.location.href=data.payment_url
            }
            console.log('order created',data)
            dispatch({type:CREATE_ORDER_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:CREATE_ORDER_FAILURE,payload:error?.response?.data?.message || error.message});
            console.log('create order error',error)
        }
    };
};

export const getUserOrder =(jwt)=>{
    return async (dispatch)=>{
        dispatch({type:GET_USER_ORDERS_REQUEST});
        try {
            const {data} =await api.get(`/api/order/user`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            })
            console.log('user order success',data)
            dispatch({type:GET_USER_ORDERS_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:GET_USER_ORDERS_FAILURE,payload:error?.response?.data?.message || error.message});
            console.log('user order error',error)
        }
    };
};

