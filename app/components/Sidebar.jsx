import React from 'react'
import Modal from './Modal.jsx' // eslint-disable-line

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      modal: false
    }
  }

  render () {
    return pug`
    .sidebar
      Modal(show=${this.state.modal} onClose=${this.handleClick})

      h2 Menu
      hr
      
      nav
        li(onClick=${this.handleClick}) menu item
        li(onClick=${this.handleClick}) menu item
        li(onClick=${this.handleClick}) menu item
        li(onClick=${this.handleClick}) menu item
        li.toggle-nav(onClick=${this.props.toggleNav}) close
    `
  }

  handleClick () {
    this.setState({
      modal: !this.state.modal
    })
  }
}
