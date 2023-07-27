import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './main/app'
import reducers from './main/reducers'

ReactDom.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , document.getElementById('app'))