import React from 'react'
import Sidebar from './Sidebar.jsx' // eslint-disable-line
import Modal from './Modal.jsx' // eslint-disable-line

export default class Home extends React.Component {
  render () {
    return pug`
    .page
      .content
        h1 Home
        p This is the Home page.
        hr
        p All of the content for the Home page belongs here!!!
        a(href='#' role='button') Learn more
      Sidebar
    `
  }
}
