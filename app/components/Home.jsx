import React from 'react'

export default class Home extends React.Component {
  render () {
    return pug`
    div
      h1 Home
      p This is the home page
      hr
      p All of the content for the home page belongs here
      a(href='#' role='button') Learn more
    `
  }
}
