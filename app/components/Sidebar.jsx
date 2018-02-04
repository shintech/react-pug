import React from 'react'

export default class PageSidebar extends React.Component {
  render () {
    return pug`
      .sidebar
        h1 Sidebar
        p This is the sidebar.
        hr
        ul 
          li
            a(href='#' role='button') Button
          li
            a(href='#' role='button') Button
          li
            a(href='#' role='button') Button
    `
  }
}
