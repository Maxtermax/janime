import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './components/smart/AppRouter.js'
import generateStore from './stores/index.js'
const store = generateStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
)
