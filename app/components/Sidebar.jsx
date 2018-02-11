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

      h1 Menu
      hr
      
      ul
        li(onClick=${this.handleClick}) Link
        li(onClick=${this.handleClick}) Link
        li(onClick=${this.handleClick}) Link
        li(onClick=${this.handleClick}) Link
        
      button(onClick=${this.props.toggleNav}) Close
        
    `
  }

  handleClick (e) {
    this.setState({
      modal: !this.state.modal
    })
  }
}
