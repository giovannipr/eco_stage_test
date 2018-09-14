import HomePage from './HomePage'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from "react-router-dom"

import AppReducer from './Reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let store = createStore(
  AppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)

function renderApp() {
  ReactDOM.render(
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={HomePage} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    ,
    document.querySelector('[data-js="app"]')
  )
}

renderApp()
