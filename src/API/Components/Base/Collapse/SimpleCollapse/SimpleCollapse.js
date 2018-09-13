import React from 'react'
import ReactDOM from 'react-dom'

class SimpleCollapse extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      show: typeof props.show === "boolean" ? props.show : false
    }

    this.toggleCollapse = this.toggleCollapse.bind(this)
    this.setCollapse = this.setCollapse.bind(this)
  }

  componentDidMount(){
    this.setCollapse(this.state.show)
  }

  componentWillReceiveProps(props){
    this.setCollapse(props.show)
    this.setState({ show: props.show })
  }

  toggleCollapse(force){
    const show = typeof force === "boolean" ? force : !this.state.show
    this.setState({ show: show })
    this.setCollapse(show)

    if(this.props.toggleFunction){this.props.toggleFunction(show, this.props.toggleParams)}
  }

  setCollapse(force){
    const show = typeof force === "boolean" ? force : this.state.show
    const content = this.refs.content;
    content.style.display = show ? '' : 'none'
  }

  render(){

    return(
      <div>
        <div onClick={this.toggleCollapse}>
          {this.props.header}
        </div>
        <div ref="content">
          {this.props.content}
        </div>
      </div>
    )

  }

}

export default SimpleCollapse
