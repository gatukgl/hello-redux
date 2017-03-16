import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'
import Counter from './containers/Counter'
import './style.css'

const initialState = { counter: 100 }

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) // will create a store in root

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(nextRootReducer)
  })
}

ReactDOM.render(
  <Provider store={store}>
    <Counter label="I'm a counter" />
  </Provider>,
  document.getElementById('react-root')
)
