import React from 'react'
import PropTypes from 'prop-types'

import DropdownItem from '../dropdown-item'
import StyledDropdownListItems from './styledDropdownListItems'

const MenuListItems = ({ items = [], onClick, menuVisible, selectedValue, onFilter }) => (
  <StyledDropdownListItems menuVisible={menuVisible}>
    {(onFilter) ? <input className="inputFilter" placeholder="Procurar..." onChange={onFilter} /> : null}
    {items.map(item => (
      <DropdownItem
        key={item.value}
        label={item.label}
        isSelected={selectedValue === item.value}
        onClick={() => onClick(item)}
      />
    ))}
  </StyledDropdownListItems>
)

MenuListItems.propTypes = {
  items: PropTypes.array.isRequired,
  menuVisible: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onFilter: PropTypes.func,
}

export default MenuListItems
