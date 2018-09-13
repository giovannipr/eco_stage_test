import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Style from './style'

import config from './jsons/config.json'

export default class HomePage extends React.Component {

  constructor(props) {
    super(props)

    const bindByName = [
      "Calculate",
      "OnChangeOrigin",
    ]

    bindByName.map((bind) => {
      this[bind] = this[bind].bind(this)
    })

    this.state = {
      table: null,
      origin: this.GetAllDDDs()[0],
    }

  }

  Calculate() {

    const {origin, destiny, minsTime, plan} = this.refs

    //input values
    const idOrigin = origin.value
    const idDestiny = destiny.value
    const vMinsTime = parseFloat(minsTime.value)
    const vPlan = parseFloat(plan.value)

    //calculated values
    const minsValue = this.GetMinsValue(idOrigin, idDestiny)
    const difTime = vMinsTime <= vPlan ? 0 : vMinsTime - vPlan
    const withPlan = difTime * minsValue * 1.1
    const noPlan = vMinsTime * minsValue

    this.setState({
      table: [
        idOrigin,
        idDestiny,
        vMinsTime,
        "FaleMais " + vPlan,
        "R$ " + withPlan.toFixed(2),
        "R$ " + noPlan.toFixed(2),
      ]
    })

  }

  OnChangeOrigin(state){ this.setState({ origin: state.target.value }) }

  GetDDD(origin){ return config.ddd[origin] }
  GetAllDDDs(){ return Object.keys(config.ddd) }
  GetMinsValue(origin, destiny) { return this.GetDDD(origin).taxas[destiny] }
  GetAllDestinies(origin){ return Object.keys(this.GetDDD(origin).taxas) }

  GetAllPlans() { return config.plans }

  GetAllTableNames() { return config.tableNames }

  render() {

    return (
      <Style>
        <div id="main-div">

          <label>Origem</label>
          <select ref="origin" onChange={this.OnChangeOrigin}>
            {
              this.GetAllDDDs().map(item => <option value={item}>{item}</option>)
            }
          </select>

          <label>Destino</label>
          <select ref="destiny">
            {
              this.GetAllDestinies(this.state.origin).map(item => <option value={item}>{item}</option>)
            }
          </select>

          <label>Tempo (mins)</label>
          <input ref="minsTime" type="number" min="0" defaultValue="0"/>

          <label>Plano</label>
          <select ref="plan">
            {
                this.GetAllPlans().map(item => <option value={item.value}>{item.name}</option>)
            }
          </select>

          <button id="btnCalc" onClick={this.Calculate}>Calcular</button>

          {
            this.state.table &&
            <div className="div-table">
              <table>
                <tr>
                  {this.GetAllTableNames().map(item => <th>{item}</th>)}
                </tr>
                <tr className="body">
                  {this.state.table.map(item => <th>{item}</th>)}
                </tr>
              </table>
            </div>
          }

        </div>
      </Style>
    )
  }
}
