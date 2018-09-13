import styled from 'styled-components'

const DropdownItem = styled.button`
  width: ${props => props.width};
  padding: 0;
  margin: 0;
  border: 10px;
  display: block;
  text-align: left;
  padding-left: 10px;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-weight: inherit;
  position: relative;
  z-index: 1;
  line-height: 40px;
  min-height: 40px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  background: ${props => props.isSelected ? '#e0e0e0' : 'transparent'};

  &:hover {
    background-color: #e0e0e0;
  }
`

DropdownItem.defaultProps = {
  width: '100% !important',
  selected: false,
}

export default DropdownItem
