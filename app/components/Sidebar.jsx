import React from 'react'
import Modal from './Modal.jsx' // eslint-disable-line

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.closeNav = this.closeNav.bind(this)

    this.state = {
      modal: false,
      sidebar: this.props.sidebar
    }
  }

  render () {
    return pug`
    .sidebar
      Modal(show=${this.state.modal} onClose=${this.handleClick}) Content

      h1 Sidebar
      hr
      ul
        li(onClick=${this.handleClick}) Link
        li(onClick=${this.handleClick}) Link
        li(onClick=${this.handleClick}) Link
        li(onClick=${this.handleClick}) Link
    `
  }

  handleClick () {
    this.setState({
      modal: !this.state.modal
    })
  }

  closeNav () {
    this.state.sidebar = null
  }
}
