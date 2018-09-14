import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Style from './style'

import Datetime from 'API_ComponentsStyled/Datetime'

import Moment from 'moment'

//API & Reducers
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as Attractions } from 'reducers/Attractions'

class Create extends React.Component {

  constructor(props) {
    super(props)

    const bindByName = [
      "TryRegisterNewAttration",
    ]

    bindByName.map((bind) => {
      this[bind] = this[bind].bind(this)
    })

    this.resetFormParams();

  }

  componentDidMount(){
    this.initializeFields();
  }

  initializeFields(){
    this.fields = [
        { name: "name", field: document.querySelectorAll('#create .form-create .name')[0], required: true },
        { name: "media", field: document.querySelectorAll('#create .form-create .media')[0], required: true },
        { name: "date", field: document.querySelectorAll('#create .form-create .datetime input')[0] }
    ]
  }

  resetForm(){
    this.resetFormParams();
    this.resetFields();
  }

  resetFormParams(){
    this.form = {
      name: "",
      media: "",
      date: -9999999,
    }
  }

  resetFields(){
    this.fields.forEach(f => f.field.value = "")
  }

  BlinkField(field){
    const initStyle = field.style;
    field.style.border = "inset";
    field.style.borderColor = "red";
    setTimeout(() => {field.style = initStyle}, 2000);
  }

  TryRegisterNewAttration(){

    let canRegister = true;

    let fields = this.fields

    fields.forEach(f => {
      this.form[f.name] = f.field.value;

      if(this.form[f.name].length === 0 && f.required) {
        canRegister = false
        this.BlinkField(f.field)
      }

    })

    if(canRegister) this.RegisterNewAttration()

  }

  RegisterNewAttration() {
    this.props.actions.addAttraction(this.form);
    alert("Cadastro feito com sucesso!!!\n"+
      "Nome:    " + this.form.name + "\n"+
      "Mídia:   " + this.form.media + "\n"+
      "Horário: " + (this.form.date <= 0 ? "Sem data" : Moment.unix(this.form.date).format("DD-MM-YYYY hh:mm:ss")) + "\n"
    );
    this.resetForm();
  }

  render() {

    return (
      <Style>

        <div id="create">

          <table className="form-create">
            <tbody>

              <tr>
                <th className="right"><label>Nome</label></th>
                <th className="left"><input type="text" className="name" required/></th>
              </tr>

              <tr>
                <th className="right"><label>Mídia</label></th>
                <th className="left"><input type="text" className="media" required/></th>
              </tr>

              <tr>
                <th className="right"><label>Data/Hora</label></th>
                <th className="left datetime">
                  <Datetime
                        onChange={ (e) => this.form.date = e.unix() }
                        disableOnClickOutside={true}
                        closeOnSelect={true}
                        closeOnTab={true}
                        open={false}
                        dateFormat="DD-MM-YYYY"
                        timeFormat="hh:mm:ss"
                        inputProps={{placeholder: "", readOnly: true}}
                        readonly={true}
                  />
                </th>
              </tr>

            </tbody>

          </table>

          <div className="form-submit">
            <button onClick={this.TryRegisterNewAttration}>Cadastrar</button>
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
