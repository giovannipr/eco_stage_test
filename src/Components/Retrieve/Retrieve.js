import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Style from './style'

import MyTables from './Tables/Tables'

import Moment from 'moment'

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
    this.updateAttractionsDivisor()
  }

  resetAttractionsDivisor(){
    this.attractionsDivisor = {
      upcoming: [],
      seen: [],
      undated: [],
    }
  }

  updateAttractionsDivisor(){
    let all = this.getAttractions()
    this.resetAttractionsDivisor()

    all.forEach( a => {
      if(a.date < 0) this.attractionsDivisor.undated.push(a)
      else if(a.date <= Moment().unix()) this.attractionsDivisor.seen.push(a)
      else this.attractionsDivisor.upcoming.push(a)
    })
  }

  getUndated(){
    let undated = this.attractionsDivisor.undated
    return undated && undated.sort( (a, b) => {
      return a.name > b.name
    })
  }

  getSeen(){
    let seen = this.attractionsDivisor.seen
    return seen && seen.sort( (a, b) => {
      return b.date - a.date
    })
  }

  getUpcoming(){
    let upcoming = this.attractionsDivisor.upcoming
    return upcoming && upcoming.sort( (a, b) => {
      return a.date - b.date
    })
  }

  getAttractions(){
    return this.props.all
  }

  render() {

    return (
      <Style>
        <div id="retrieve">

          <MyTables
            attractionsLists={[
              {
                divName: "upcoming",
                tableName: "Próximos...",
                undated: false,
                list: this.getUpcoming(),
              },
              {
                divName: "seen",
                tableName: "Últimos vistos...",
                undated: false,
                list: this.getSeen(),
              },
              {
                divName: "undated",
                tableName: "Sem data...",
                undated: true,
                list: this.getUndated(),
              },
            ]}
          />

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
