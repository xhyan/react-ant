// import './index.html';
// import './index.less';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import React from 'react';
// import { browserHistory } from 'react-router';
// import App from '../components/App';
// import Routes from '../routes/index';
// import Counter from '../containers/App';
// import configureStore from '../store/configStore';
// // ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));
//
// const store = configureStore()
//
// ReactDOM.render(
//   <Provider store={store}>
//       <Counter />
//   </Provider>,
//   document.getElementById('root')
// );


import './index.html';
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../components/NewTodo/App';
import todoStore from '../store/todoStore';


let store = todoStore()

let rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
