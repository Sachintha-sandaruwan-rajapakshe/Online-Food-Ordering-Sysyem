import { api } from "../../config/api";
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType"

export const createMenuItem =({menu,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:CREATE_MENU_ITEM_REQUEST});
        try {
            const {data} =await api.post(`/api/admin/food`,menu,{
                headers:{
                    authorization: `Bearer ${jwt}`,
                },
            })
            console.log('create menu success',data)
            dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data})
        } catch (error) {
            console.log('create menu error',error);
            dispatch({type:CREATE_MENU_ITEM_FAILURE,payload:error})
        }

    };

};

export const getMenuItemsByRestaurantId =({reqData,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST});
        try {
            const {data} =await api.get(`/api/food/restaurent/${reqData.restaurentId}?vegetarian=${reqData.vegeterian}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`,{
                headers:{
                    authorization: `Bearer ${jwt}`,
                },
            })
            console.log('get menu success',data)
            dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS,payload:data})
        } catch (error) {
            console.log('get menu error',error);
            dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE,payload:error})
        }

    };

};

export const searchMenuItem =({keyword,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});
        try {
            const {data} =await api.get(`/api/food/search?name=${keyword}`,{
                headers:{
                    authorization: `Bearer ${jwt}`,
                },
            })
            console.log('search menu success',data)
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data})
        } catch (error) {
            console.log('search menu error',error);
            dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:error})
        }

    };

};

// export const getAllIngredientsOfMenuItem =({reqData})=>{
//     return async(dispatch)=>{
//         dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST});
//         try {
//             const {data} =await api.get(`/api/food/restaurent/${reqData.restaurentId}`,{
//                 headers:{
//                     authorization: `Bearer ${reqData.jwt}`,
//                 },
//             })
//             console.log('get menu success',data)
//             dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS,payload:data})
//         } catch (error) {
//             console.log('get menu error',error);
//             dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE,payload:error})
//         }

//     };

// };

export const updateMenuItemAvailability =({foodId,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});
        try {
            const {data} =await api.put(`/api/admin/food/${foodId}`,{},{ //{}request body eka sesa bawitha karai meya nathuwa put mapping eka weda nokarai
                headers:{
                    authorization: `Bearer ${jwt}`,
                },
            })
            console.log('get menu success',data)
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,payload:data})
        } catch (error) {
            console.log('get menu error',error);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,payload:error})
        }

    };

};

export const deleteFoodAction =({foodId,jwt})=>{
    return async(dispatch)=>{
        dispatch({type:DELETE_MENU_ITEM_REQUEST});
        try {
            const {data} =await api.delete(`/api/admin/food/${foodId}`,{
                headers:{
                    authorization: `Bearer ${jwt}`,
                },
            })
            console.log('get menu success',data)
            dispatch({type:DELETE_MENU_ITEM_SUCCESS,payload:data})
        } catch (error) {
            console.log('get menu error',error);
            dispatch({type:DELETE_MENU_ITEM_FAILURE,payload:error})
        }

    };

};

