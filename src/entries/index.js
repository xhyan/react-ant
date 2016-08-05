import './index.html';
import './index.less';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import React from 'react';
import { browserHistory } from 'react-router';
import App from '../components/App';
import Routes from '../routes/index';
import Counter from '../containers/App'
import configureStore from '../store/configStore'
// ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
      <Counter />
  </Provider>,
  document.getElementById('root')
);
