import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import cartReducer from "./modules/Cart/reducers";

const reducer = combineReducers({ product: cartReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
