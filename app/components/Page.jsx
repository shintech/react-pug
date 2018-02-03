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
      table
        thead
          tr
            th.table-header Name
            th.table-header Attribute
            th.table-header Created At
        tbody
          ${this.state.models.map(model =>
            pug`
              tr(key=${model.id})
                td ${model.name}
                td ${model.attribute}
                td ${model.created_at}
              `
          )}
    `
  }
}
