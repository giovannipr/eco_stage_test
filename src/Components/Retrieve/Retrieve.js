import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Style from './style'

export default class Retrieve extends React.Component {

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

    const atts = [{
      id: 1,
      name: "Futebol",
      media: "Globo",
      date: "11/11/2018"
    }]

    window.localStorage.setItem("attractions", JSON.stringify(atts));

    console.log(JSON.parse(window.localStorage.getItem('attractions')))

  }

  getUpcoming(){
    return window.localStorage.getItem("attractions");
  }

  getAttractions(){
    return JSON.parse(window.localStorage.getItem('attractions'));
  }

  render() {

    return (
      <Style>
        <div id="retrieve">

          <div className="upcoming">
            <label>Próximos...</label>
            <table>
              <tr>
                <th>Nome</th>
                <th>Mídia</th>
                <th>Data/Hora</th>
              </tr>
              {
                (this.getAttractions() instanceof Array) && this.getAttractions().map( (a, i) => {
                  return (
                    <tr>
                      <th>{a.name}</th>
                      <th>{a.media}</th>
                      <th>{a.date}</th>
                    </tr>
                  )
                })
              }
            </table>
          </div>

        </div>
      </Style>
    )
  }
}
