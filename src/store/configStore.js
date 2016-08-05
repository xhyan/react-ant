import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState){
  return createStore(createStoreWithMiddleware(rootReducer, initialState));
}