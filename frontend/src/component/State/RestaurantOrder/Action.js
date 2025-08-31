import { GET_RESTAURANT_ORDER_FAILURE, GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";
import {api} from '../../config/api'

export const fetchRestaurantOrder =({restaurantId,orderStatus,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:GET_RESTAURANT_ORDER_REQUEST});
        try {
            const response = await api.get(`/api/admin/order/restaurent/${restaurantId}`,{
                params:{orderStatus:orderStatus},
                headers:{
                    Authorization: `Bearer ${jwt}`
                },
            });
            dispatch({type:GET_RESTAURANT_ORDER_SUCCESS,payload:response.data})
            console.log("get Restaurant Order ",response.data);
        } catch (error) {
            dispatch({type:GET_RESTAURANT_ORDER_FAILURE,payload:error?.response?.data?.message || error.message})
            console.log("get Restaurant Order error ", error);
        }
    };
};

export const updateOrderStatus =({orderId,orderStatus,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:UPDATE_ORDER_STATUS_REQUEST});
        try {
            const response = await api.put(`/api/admin/order/${orderId}/${orderStatus}`,{},{
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log('update order status',response.data)
            dispatch({type:UPDATE_ORDER_STATUS_SUCCESS,payload:response.data})
        } catch (error) {
            dispatch({type:UPDATE_ORDER_STATUS_FAILURE,payload:error?.response?.data?.message || error.message})
        }
    };
}