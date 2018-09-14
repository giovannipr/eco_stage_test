import styled from 'styled-components'

const style = styled.div`


    #tables {

      .myTable {
        border-radius: 5px;
        background: #F0F8FF21;
        padding: 10px;
        margin: 5px;

        label {
          font-weight: bolder;
        }

      }

      table {

        width: 100%;
        margin: 10px 0px;
        padding: 5px 0px;
        border-spacing: 0px;

        tbody {

          tr {

            th {
                border: 1px #2B2B2B24 solid;
                padding: 3px;
            }

            .content {
              font-weight: normal;
            }

          }

          .header {
              background-color: #C0C6CC52;
          }

          .line0 {
            background-color: #F0F8FF;
          }

          .line1 {
            background-color: #F0F8FFD1;
          }

        }

      }

    }



`
export default style
