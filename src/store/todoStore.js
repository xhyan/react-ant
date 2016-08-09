import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoApp from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function todoStore(initialState){
  return createStoreWithMiddleware(todoApp, initialState);
}
