import React, { Component } from 'react'
import Form from './form.js'

class App extends Component {

  constructor (props) {
    super(props)
  }

  handleClick (){
   

  }

  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <Form onClick={this.handleClick}/>
      </div>

      )

  }

}

export default App
