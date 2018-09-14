import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Style from './style'

import Moment from 'moment'

export default class Tables extends React.Component {

  constructor(props) {
    super(props)

    const bindByName = [
      // "getAttractions",
      // "OnChangeOrigin",
    ]

    bindByName.map((bind) => {
      this[bind] = this[bind].bind(this)
    })
  }

  renderHeaderOfTable(undated){
    const headers = ["Nome", "Mídia"]
    if(!undated) headers.push("Data/Hora")

    return (
      <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
    )
  }

  renderBodyOfTable(attraction){

    const {undated} = attraction

    return (
      attraction.list.map( (l, i) => {
        return (
          <tr key={i}>
            <th>{l.name}</th>
            <th>{l.media}</th>
            {!undated && <th>{Moment.unix(l.date).format("DD-MM-YYYY hh:mm:ss")}</th>}
          </tr>
        )
      })
    )

  }

  render() {

    const {attractionsLists} = this.props

    return (
      <Style>
        <div id="retrieve">
          {
            attractionsLists.map( (a, index) => {
              return (
                <div key={index} className={a.divName}>
                  <label>{a.tableName}</label>
                  <table>
                    <tbody>
                    {this.renderHeaderOfTable(a.undated)}
                    {this.renderBodyOfTable(a)}
                    </tbody>
                  </table>
                </div>
              )
            })
          }
        </div>
      </Style>
    )
  }
}
