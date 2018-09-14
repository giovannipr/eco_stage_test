import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Style from './style'

export default class Create extends React.Component {

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

        <div id="create">

          <div className="form-create">

            <div>
              <label>Nome:</label>
              <input type="text" />
            </div>

            <div>
              <label>Mídia:</label>
              <input type="text" />
            </div>

            <div>
              <label>Data/Hora:</label>
              <input type="text" />
            </div>

          </div>

          <div className="form-submit">

            <button>Cadastrar</button>

          </div>

        </div>
      </Style>
    )
  }
}
