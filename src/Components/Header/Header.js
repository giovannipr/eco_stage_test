import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Style from './style'

export default class Header extends React.Component {

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

        </div>
      </Style>
    )
  }
}
