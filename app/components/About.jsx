import React from 'react'

export default class Home extends React.Component {
  render () {
    return pug`
    div
      h1 About
      p This is the about page
      hr
      p All of the content for the about page belongs here
      a(href='#' role='button') Learn more
      
    `
  }
}
