import React from 'react'

export default class extends React.Component {
  render () {
    return pug`
      .footer
        p © ${this.props.message}
    `
  }
}
