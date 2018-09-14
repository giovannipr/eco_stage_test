import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Style from './style'

import Header from './Components/Header/Header'
import Create from './Components/Create/Create'
import Retrieve from './Components/Retrieve/Retrieve'

export default class HomePage extends React.Component {

  constructor(props) {
    super(props)

    const bindByName = [
      // "Calculate",
      // "OnChangeOrigin",
    ]

    bindByName.map((bind) => {
      this[bind] = this[bind].bind(this)
    })

    // this.state = {
    //   table: null,
    //   origin: this.GetAllDDDs()[0],
    // }

  }

  render() {

    return (
      <Style>
        <div id="main-div">
          <div>Olá! Seja Bem-Vindo a suas atrações...</div>
          <Header />
          <div id="main-body">
            {/* <Create /> */}
            <Retrieve />
          </div>
        </div>
      </Style>
    )
  }
}
