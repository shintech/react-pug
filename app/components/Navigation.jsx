import React from 'react'

export default class Navigation extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mediaId: false,
      active: window.location.hash
    }

    window.onhashchange = (e) => {
      this.setState({
        active: window.location.hash
      })
    }
  }

  render () {
    let active = this.state.active

    return pug`
    nav
      li
        a(className=${active === '#/' ? 'active' : null} href='#/') home
      li
        a(className=${active === '#/page' ? 'active' : null} href='#/page') page
      li
        a(className=${active === '#/about' ? 'active' : null} href='#/about') about
      li
        a.openSidebar(onClick=${this.props.openNav} data-show=false) sidebar
    `
  }
}
