import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import DialogMessageReducer from "./DialogMessageReducer";

const reducers = {
  dialogMessage: DialogMessageReducer,
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger),
);

export default store;