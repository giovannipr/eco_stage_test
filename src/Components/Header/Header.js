import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Style from './style'

export default class Header extends React.Component {

  constructor(props) {
    super(props)

    const bindByName = [
      "ChangeTabById",
    ]

    bindByName.map((bind) => {
      this[bind] = this[bind].bind(this)
    })

  }

  ChangeTabById(id){
    this.props.changeTabID(id);
  }

  render() {

    const {currentTabID, changeTabID} = this.props;

    const selectedStyle = {
      pointerEvents: "none",
      backgroundColor: "blue"
    }
    const notSelectedStyle = {
      cursor: "pointer",
    }

    return (
      <Style>
        <div id="header">
          <ul>
            {
              ["Cadastrar", "Consultar"].map( (e, index) => {
                return currentTabID !== index + 1 ?
                <li key={index} onClick={() => changeTabID(index + 1)} style={notSelectedStyle}>{e}</li> :
                <li key={index} style={selectedStyle}>{e}</li>
              })
            }
          </ul>
        </div>
      </Style>
    )
  }
}
