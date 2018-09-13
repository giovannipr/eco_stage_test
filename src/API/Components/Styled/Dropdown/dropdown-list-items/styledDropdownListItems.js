import styled from 'styled-components'
import PropTypes from 'prop-types'

const DropdownDiv = styled.div `
  width: ${props => props.width}px;
  max-height: 150px;
  overflow-y: auto;
  cursor: pointer;
  display: ${props => props.menuVisible ? '' : 'none'};
  border: #e0e0e0 solid 2px;
  border-top: none;
  position: absolute;
  z-index: 999;
  background-color:white;
  .inputFilter{
    width:100%;
    font-size:14px;
    padding: 10px;
    border: solid 2px #e0e0e0;
    border-radius:4px;
  }
`
DropdownDiv.defaultProps = {
  menuVisible: false,
  width: 220,
}

DropdownDiv.propTypes = {
  menuVisible: PropTypes.bool.isRequired,
}

export default DropdownDiv
