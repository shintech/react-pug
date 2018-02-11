import React from 'react'
import Sidebar from './Sidebar.jsx' // eslint-disable-line

export default class extends React.Component {
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
      let body = json.body

      console.log(body.message)

      localStorage.setItem('models', JSON.stringify(body.models))

      this.setState({ models: body.models })
    })
  }

  render () {
    return pug`
    .content
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
