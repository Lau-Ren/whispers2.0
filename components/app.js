import React, { Component } from 'react'
import Form from './form.js'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <Form />
      </div>

      )

  }

}

export default App
