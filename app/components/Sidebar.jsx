import React from 'react'
import Modal from './Modal.jsx' // eslint-disable-line

export default class PageSidebar extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = { modal: false }
  }

  handleClick () {
    this.setState({
      modal: !this.state.modal
    })
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
}
