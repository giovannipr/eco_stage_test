import HomePage from './HomePage'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from "react-router-dom"

function renderApp() {
  ReactDOM.render(
        <div>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={HomePage} />
            </div>
          </BrowserRouter>
        </div>
    ,
    document.querySelector('[data-js="app"]')
  )
}

renderApp()
