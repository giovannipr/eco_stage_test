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
      "ChangeTabID",
    ]

    bindByName.map((bind) => {
      this[bind] = this[bind].bind(this)
    })

    this.state = {
      currentTab: 1,
    }

  }

  ChangeTabID(id){
    this.setState({currentTab: id})
  }

  CurrentTab(){
    switch (this.state.currentTab) {
      case 1: return <Create />;
      case 2: return <Retrieve />;
      default: <div />;
    }
  }

  render() {

    return (
      <Style>
        <div id="main-div">
          <div>Olá! Seja Bem-Vindo a suas atrações...</div>
          <Header currentTabID={this.state.currentTab} changeTabID={this.ChangeTabID} />
          <div id="main-body">
            { this.CurrentTab() }
          </div>
        </div>
      </Style>
    )
  }
}
