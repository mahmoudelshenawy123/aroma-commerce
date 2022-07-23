
import {ADD_TO_CART} from './cartActionsTypes'
import {ADD_TO_FACORITE} from './cartActionsTypes'
import {CHANGE_LANG} from './cartActionsTypes'
import Cookies from 'js-cookie'

let initialState={
    cartItemsCount:0,
    favoriteItemsCount:0,
    cartProducts:[],
    lang:Cookies.get('i18next') || 'en',
}
const cartReducer =(state =initialState ,action)=>{
  
    switch(action.type){
        case ADD_TO_CART :{
            if(state.cartProducts.findIndex(val=>val.id==action.productData.id) == -1){
                return{
                    ...state,
                    cartItemsCount:state.cartItemsCount+1,
                    cartProducts:[...state.cartProducts ,action.productData]
                }
            }else{
                alert('already added to cart')
            }
        }
        case ADD_TO_FACORITE :{
            return{
                ...state,
                favoriteItemsCount:state.favoriteItemsCount+1
            }
        }
        case CHANGE_LANG :{
            console.log(action.language)
            return{
                ...state,
                lang:action.language
            }
        }
        

        default: return state
    }
}

export default cartReducer 