import styled from 'styled-components'

const style = styled.div`

  #create {

    padding: 15px;

    .form-create {
      border-radius: 5px;
      background: #F0F8FF21;
      text-align: center;
      width: 100%;

      th {
        width: 50%;
        padding: 10px;

        input {
          height: 20px;
          width: 256px;
          border-radius: 5px;
          border: none;
          font-size: 22px;
        }

      }

      .left {
        text-align: left;
      }

      .right {
        text-align: right;
        padding-right: 50px;
        font-size: 20px;
      }

      .date{
        display: inline-flex;
      }
    }

    .form-submit {
      display: flex;
      justify-content: space-around;
      margin-top: 15px;

      button {
        height: 36px;
        font-size: 18px;
        border-radius: 10px;
      }

    }

  }

`
export default style
