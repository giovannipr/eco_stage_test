import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Style from './style'

//API & Reducers
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as Attractions } from 'reducers/Attractions'

class Retrieve extends React.Component {

  constructor(props) {
    super(props)

    const bindByName = [
      // "getAttractions",
      // "OnChangeOrigin",
    ]

    bindByName.map((bind) => {
      this[bind] = this[bind].bind(this)
    })

    this.props.actions.getList()

  }

  getUpcoming(){
    return window.localStorage.getItem("attractions");
  }

  getAttractions(){
    return this.props.all
  }

  render() {

    return (
      <Style>
        <div id="retrieve">

          <div className="upcoming">
            <label>Próximos...</label>
            <table>
              <tbody>
                <tr>
                  <th>Nome</th>
                  <th>Mídia</th>
                  <th>Data/Hora</th>
                </tr>
                {
                  this.getAttractions().map( (a, i) => {
                    return (
                      <tr key={i}>
                        <th>{a.name}</th>
                        <th>{a.media}</th>
                        <th>{a.date}</th>
                      </tr>
                    )
                  })
                }
              </tbody>

            </table>
          </div>

        </div>
      </Style>
    )
  }
}

function mapStateToProps({ attractions }) {
  const { all, isLoading } = attractions

  return {
    all,
    isLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...Attractions,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Retrieve)
