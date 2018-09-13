import styled from 'styled-components'

const style = styled.div`

  #main-div {
    display: inline-grid;
    text-align: center;
    width: -webkit-fill-available;
    padding: 10px;
    place-content: center;

    select, input, button {
      height: 36px;
      margin-bottom: 10px;
      max-width: 750px;
      width: 80vw;

      font-size: 24px;
      text-align: center;
      text-align-last: center;
    }

    label {
      font-size: 30px;
    }

    .div-table {

      max-width: 750px;
      width: 80vw;
      text-align: -webkit-center;

      margin-top: 30px;

      table{
        border-collapse: collapse;
        background-color: #80808026;
        border-radius: 5px;
        padding: 10px;
        td, th {
            border: 1px solid #8b8b8b;
            text-align: left;
            padding: 8px;
        }

        .body{
          th {
            font-weight: normal;
            text-align: center;
          }
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }
      }

    }

  }

`
export default style
