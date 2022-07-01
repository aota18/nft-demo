import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "./blockchain/blockchainReducer";
import dataReducer from "./data/dataReducer";

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
});

const middleWare = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleWare));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
