import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Style from './style'

import Datetime from 'API_ComponentsStyled/Datetime'

//API & Reducers
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as Attractions } from 'reducers/Attractions'

class Create extends React.Component {

  constructor(props) {
    super(props)

    const bindByName = [
      "RegisterNewAttration",
    ]

    bindByName.map((bind) => {
      this[bind] = this[bind].bind(this)
    })

    this.form = {
      name: "",
      media: "",
      date: -9999999,
    }

  }

  RegisterNewAttration() {
    this.form.name = document.querySelectorAll('#create .form-create .name')[0].value;
    this.form.media = document.querySelectorAll('#create .form-create .media')[0].value;

    this.props.actions.addAttraction(this.form);
  }

  render() {

    return (
      <Style>

        <div id="create">

          <form className="form-create">

            <div>
              <label>Nome</label>
              <input type="text" className="name" required/>
            </div>

            <div>
              <label>Mídia</label>
              <input type="text" className="media" required/>
            </div>

            <div className="date">
              <label>Data/Hora</label>
              <Datetime
                    onChange={ (e) => this.form.date = e.unix() }
                    disableOnClickOutside={true}
                    closeOnSelect={true}
                    closeOnTab={true}
                    open={false}
                    dateFormat="DD-MM-YYYY"
                    timeFormat="hh:mm:ss"
                    inputProps={{placeholder: "Clique aqui para inserir uma data...", readOnly: true}}
                    readonly={true}
              />
            </div>

          </form>

          <div className="form-submit">
            <button onClick={this.RegisterNewAttration}>Cadastrar</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Create)
