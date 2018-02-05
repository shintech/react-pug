import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation.jsx'
import Home from './components/Home.jsx'
import Page from './components/Page.jsx'
import About from './components/About.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'

require('../public/css/index.scss')

localStorage.clear('models')

class Main extends React.Component {
  constructor (props) {
    super(props)

    this.openNav = this.openNav.bind(this)
    this.navigationBar = this.navigationBar.bind(this)

    this.state = {
      sidebar: null
    }
  }

  openNav (e) {
    e.preventDefault()
    this.setState({ sidebar: !this.state.sidebar })
  }

  navigationBar () {
    return (
      <Navigation openNav={this.openNav} />
    )
  }

  render () {
    let sidebar = this.state.sidebar ? <Sidebar sidebar={this.state.sidebar} /> : null

    return (
      <Router>
        <div id='root'>
          <Route component={this.navigationBar} openNav={this.openNav} />
          <div id='main-view'>
            <Route exact path='/' component={Home} />
            <Route exact path='/page' component={Page} />
            <Route exact path='/about' component={About} />
            {sidebar}
          </div>
          <Footer message='shintech.ninja' />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('container'))
