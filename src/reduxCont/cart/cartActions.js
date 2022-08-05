import {
    ADD_TO_CART,
    ADD_TO_FACORITE,
    CHANGE_LANG,
    FETCH_USER_FAILURE,
    FETCH_USER_SUCCESS,
    FETCH_USER_LOADING
} 
    from './cartActionsTypes'
import axiosConfig from 'features/axiosConfig'
export const addProductToCart =(product)=>{
    return{
        type:ADD_TO_CART,
        productData:product
    }
}
export const addProductToFavorite =()=>{
    return{
        type:ADD_TO_FACORITE
    }
}
export const changeLanguagee =async(dispatch ,lang)=>{
    dispatch(
        {
            type:CHANGE_LANG,
            language:lang
        }
    )
}
export const fetchUserLoading =()=>{
    return {
        type:FETCH_USER_LOADING,
    }
}
export const fetchUserSuccess =(data)=>{
    return {
        type:FETCH_USER_SUCCESS,
        users:data
    }
}
export const fetchUserFailure =(error)=>{
    return {
        type:FETCH_USER_FAILURE,
        users:error
    }
}
export const fetchUserData =async (dispatch)=>{
        dispatch(fetchUserLoading)
        console.log('fetch')

        axiosConfig.get('/posts/1').then(res=>{
            console.log(res.data)
            dispatch(fetchUserSuccess,res.data)
        }).catch(err=>{
            console.log(err.message)

            dispatch(fetchUserFailure,err.message)
        })
}