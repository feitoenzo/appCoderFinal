import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReduer from "./reducers/auth.reducer";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import OrdersReducer from "./reducers/orders.reducer";
import ProductReducer from "./reducers/products.reducer";
import thunk from "redux-thunk";

//Ya ha una version nueva de CreateStore po eso esta tachada







//Dede aca parten los estados.
const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
  cart: CartReducer,
  orders: OrdersReducer,
  auth: AuthReduer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
