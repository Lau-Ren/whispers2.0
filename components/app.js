import React, { Component } from 'react'
import Secret from './secret.js'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return
    <div>
    <h1>Welcome to {this.props.name}</h1>
    <Secret />
    </div>
  }

}

export default App
