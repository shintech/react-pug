import React from 'react'

export default class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      activeClassName: `#${props.location.pathname}`
    }

    window.onhashchange = (e) => {
      this.setState({
        activeClassName: window.location.hash
      })
    }
  }

  handleClick (e) {
    this.setState({
      activeClassName: e.target.dataset.path
    })
  }

  render () {
    return pug`
      nav
        li
          a(onClick=${this.handleClick} data-path='/' className=${this.state.activeClassName === '#/' ? 'active' : null} href='#/') home
        li
          a(onClick=${this.handleClick} data-path='/page' className=${this.state.activeClassName === '#/page' ? 'active' : null} href='#/page') page 
        li
          a(onClick=${this.handleClick} data-path='/about' className=${this.state.activeClassName === '#/about' ? 'active' : null} href='#/about') about               
    `
  }
}
