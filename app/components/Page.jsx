import React from 'react'

export default class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      models: []
    }
  }

  componentDidMount () {
    const cache = localStorage.getItem('models')

    if (cache) {
      this.setState({ models: JSON.parse(cache) })
      return
    }

    return fetch('/api/models')
    .then(response => response.json())
    .then(json => {
      localStorage.setItem('models', JSON.stringify(json.body))

      this.setState({ models: json.body })
    })
  }

  render () {
    return pug`
    div
      h1 Example
      table
        thead
          tr
            th.table-header Name
            th.table-header Attribute
            th.table-header Created At
        tbody
          each model, index in ${this.state.models}
            tr(key=index)
              td= model.name
              td= model.attribute
              td= model.created_at
    `
  }
}
