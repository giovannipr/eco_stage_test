import styled from 'styled-components'

const style = styled.div`


    #tables {

      .myTable {
        background: #0000ff21;
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
                border: 1px #2b2b2b24 solid;
                padding: 3px;
            }

            .content {
              font-weight: normal;
            }

          }

          .header {
              background-color: #9FB9E8;
          }

          .line0 {
            background-color: #afbfff73;
          }

          .line1 {
            background-color: #bcf3ff7a;
          }

        }

      }

    }



`
export default style
