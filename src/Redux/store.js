import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// Define your initial state
const initialState = {
    // Add your initial state properties here
  };
  
  const middleware=[thunk];
// Create the Redux store
const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;