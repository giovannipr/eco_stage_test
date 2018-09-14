import styled from 'styled-components'

const style = styled.div`

  #create {

    padding: 15px;

    .form-create {
      .date{
        display: inline-flex;
      }
    }

    .form-create + div {
      display: flex;
      justify-content: space-around;

      label, input {
        text-align: center;
        width: 50%;
        padding: 10px;
      }

    }

  }

`
export default style
