import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/containers/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById("react-container"))
