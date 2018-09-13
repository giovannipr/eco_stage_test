import styled from 'styled-components'

const StyledDropdown = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  border: #e0e0e0 solid 2px;
  overflow-y: auto;  
  p{
    font-size:14px;
    margin:10px 0;
  }

  .labelSelected {
    padding-left: 5px;
    width: 100%;
    padding-right: 3px;
  }

  .icon {
    margin: 12px 10px 0px 0px;
    right: 0;
  }

  &.divClickArea {
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0;
    background-color: transparent;
    position: fixed;
    display: ${props => props.menuVisible ? '' : 'none'};
    border: none;
  }
`

StyledDropdown.defaultProps = {
  menuVisible: false,
  width: 220,
}

export default StyledDropdown
