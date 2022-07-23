import {ADD_TO_CART} from './cartActionsTypes'
import {ADD_TO_FACORITE} from './cartActionsTypes'
import {CHANGE_LANG} from './cartActionsTypes'

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

export const changeLanguagee =(lang)=>{
    return{
        type:CHANGE_LANG,
        language:lang
    }
}