import { api } from "../../config/api";

export const getAllRestaurentsAction =(token)=>{
    return async (dispatch)=>{
        dispatch({type:GET_ALL_RESATURENTS_REQUEST});

        try {
            const {data}= await api.get("/api/restaurents",{
                Headers:{
                    authorization:`Bearer ${token}`,
                },
            });
            dispatch({type:GET_ALL_RESATURENTS_SUCCESS,payload:data});
            console.log("all resturents",data)
        } catch (error) {
            console.log("catch error",error)
            dispatch({type:GET_ALL_RESATURENTS_FAILURE,payload:error});
        }
    };
};

export const getRestaurentById =(reqData)=>{
    return async(dispatch)=>{
        dispatch({type:GET_RESTAURENT_BY_ID_REQUEST});
        try {
            const response = await api.get(`/api/restaurents/${reqData.restaurentId}`,{
                headers:{
                    authorization:`bearer ${reqData.jwt}`
                }
            });
            dispatch({type:GET_RESTAURENT_BY_ID_SUCCESS,payload:response.data})
        } catch (error) {
            console.log("error",error);
            dispatch({type:GET_RESTAURENT_BY_ID_FAILURE,payload:error})
        }

    };

};

export const getRestaurentByUserId =(jwt)=>{
    return async(dispatch)=>{
        dispatch({type:GET_RESTAURENT_BY_USER_ID_REQUEST});
        try {
            const {data} =await api.get(`/api/admin/restaurent/user`,{
                headers:{
                    authorization:`bearer ${jwt}`,
                },
            });
            dispatch({type:GET_RESTAURENT_BY_USER_ID_SUCCESS,payload:data})
        } catch (error) {
            console.log("getRestaurentByUserId error");
            dispatch({type:GET_RESTAURENT_BY_USER_ID_FAILURE,payload:error})
        }
    };
};

export const createRestaurent =(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:CREATE_RESTAURENT_REQUEST});
        try {
            const {data} = await api.post(`/api/admin/restaurents`,reqData.data,{
                headers:{
                    authorization: `bearer ${reqData.token}`,
                },
            })
             dispatch({type:CREATE_RESTAURENT_SUCCESS,payload:data})
            console.log("resturent create",data);
        } catch (error) {
            console.log("resturent create error",error);
            dispatch({type:CREATE_RESTAURENT_FAILURE,payload:error});
        }
    };
};

export const updateRestaurent =({restaurentId,resturentData,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_RESTAURENT_REQUEST});
        try {
            const res = await api.put(`/api/admin/restaurents,${restaurentId}`,resturentData,{
                headers:{
                    authorization: `bearer ${jwt}`,
                },
            })
             dispatch({type:UPDATE_RESTAURENT_SUCCESS,payload:res.data})
            console.log("update resturent details",res);
        } catch (error) {
            console.log("update restaurent details error",error);
            dispatch({type:UPDATE_RESTAURENT_FAILURE,payload:error});
        }
    };
};
