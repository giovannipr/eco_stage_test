import React from 'react'

//Components
import ReactDatatime from 'react-datetime'

//Styles
import StyledDatatime from './styledDatetime'

//references
//https://www.npmjs.com/package/react-datetime
//https://momentjs.com/

/*** Exemplo de Uso ***/
//   <Datetime
//     onChange={this.dtOnChange}
//     disableOnClickOutside={true}
//     closeOnSelect={true}
//     closeOnTab={true}
//     open={false}
//     dateFormat="YYYY-MM-DD"
//     timeFormat={false}
//     inputProps={
//       {
//         placeholder: "Clique aui para inserir uma data..."
//       }
//     }
//   />

class Datetime extends React.Component {

  render(){

    return(
      <StyledDatatime>
        <ReactDatatime {...this.props} />
      </StyledDatatime>
    )

  }

}

export default Datetime
