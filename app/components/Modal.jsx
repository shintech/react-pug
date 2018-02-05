import React from 'react'

export default class extends React.Component {
  render () {
    if (!this.props.show) {
      return null
    }

    return pug`
    .backdrop(onClick=${this.props.onClose} style={})
      #modal
        .modal-content
          h2 Header
          div
            h3 Header
            p Modal Text
            button.close(onClick=${this.props.onClose}) Close
    `
  }
}
