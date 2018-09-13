import React from 'react'
import PropTypes from 'prop-types'
import StyledDropdownItem from './styledDropdownItem'

const DropdownItem = ({ label, onClick, isSelected }) => (
  <StyledDropdownItem
    isSelected={isSelected}
    onClick={() => onClick()}
  >
    {label}
  </StyledDropdownItem>
)

DropdownItem.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}

export default DropdownItem
