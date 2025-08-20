import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";



// Calling API with REDUX-THUNK
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});


// Applying THUNK to STORE
const store = createStore(rootReducer,  applyMiddleware(thunk) );

export default store
