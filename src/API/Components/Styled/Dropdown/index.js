import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DropdownList from './dropdown-list-items'
import StyledDropdown from './styledDropdown'
import Icon from  '../../../Icons/FontAwesome'


class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualSelectedLabel: props.selectedLabel || '',
      actualSelectedValue: props.selectedValue || '',
      menuVisible: false,
      filtered: undefined,
    }

    this.updateMenu = this.updateMenu.bind(this)
    this.handleSelectItem = this.handleSelectItem.bind(this)
    this.onFilter = this.onFilter.bind(this)
  }
  componentWillMount() {
    const actualSelected = this.props.items.find(item => item.value === this.props.selectedValue)

    this.setState({
      actualSelectedLabel: actualSelected ? actualSelected.label : '',
      actualSelectedValue: this.props.selectedValue || '',
      menuVisible: false,
    })
  }

  componentWillReceiveProps(nextProps) {
    const actualSelectedLabel = nextProps.items.find(item => item.value === nextProps.selectedValue)

    if (actualSelectedLabel) {
      this.setState({
        actualSelectedLabel: actualSelectedLabel.label,
        actualSelectedValue: nextProps.selectedValue,
      })
    }
  }

  updateMenu() {
    const visible = this.state.menuVisible
    this.setState({
      menuVisible: !visible,
    })
  }
  handleSelectItem(item) {
    this.setState({
      actualSelectedLabel: item.label,
      actualSelectedValue: item.value,
    })

    this.props.onClick(item)

    this.updateMenu()
  }
  onFilter(x) {
    if (x.target.value) {
      this.setState({
        filtered: this.props.items.filter(item =>
          item.label.toLowerCase().includes(x.target.value.toLowerCase())),
      })
    } else {
      this.setState({ filtered: undefined })
    }
  }

  render() {

    return (
      <div className="dropdown-container">
        <StyledDropdown className="dropdown" onClick={() => this.updateMenu()}>
          <p className="labelSelected">{this.state.actualSelectedLabel}</p>
          <Icon icon="chevron-down" className="icon" />
        </StyledDropdown>

        <DropdownList
          items={this.state.filtered || this.props.items}
          menuVisible={this.state.menuVisible}
          onClick={this.handleSelectItem}
          selectedValue={this.state.actualSelectedValue}
          onFilter={(this.props.items.length > 10) ? this.onFilter : undefined}
        />

        <StyledDropdown
          className="divClickArea"
          menuVisible={this.state.menuVisible}
          onClick={() => this.updateMenu()}
        />
      </div>
    )
  }
}

Dropdown.propTypes = {
  selectedValue: PropTypes.string,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Dropdown
