import reactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers.js'
import App from './components/app.js';

const store = createStore(reducer);

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));