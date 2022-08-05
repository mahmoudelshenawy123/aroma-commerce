import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import cartReducer from './cart/cartReducer'

const store = createStore(cartReducer,applyMiddleware(thunk))

export default store