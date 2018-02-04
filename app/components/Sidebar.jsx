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
      p This is the sidebar.
      hr
      ul
        li
          button(onClick=${this.handleClick}) Modal
    `
  }
}
