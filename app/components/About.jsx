import React from 'react'
import Sidebar from './Sidebar.jsx' // eslint-disable-line

export default class extends React.Component {
  render () {
    return pug`
    .page
      .content
        h1 About
        p This is the about page.
        hr
        p All of the content for the About page belongs here!!!
        a(href='#' role='button') Learn more
    `
  }
}
