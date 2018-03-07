import React, { Component } from 'react';

class Calculator extends Component {

  constructor() {
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: 0
    }
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
  }

  handleChange1(e) {
    this.setState({
      number1: parseInt(e.target.value)
    })
  }

  handleChange2(e) {
    this.setState({
      number2: parseInt(e.target.value)
    })
  }

  sum(x, y) {
    this.setState({
      result: x + y
    })
  }

  sub(x, y) {
    this.setState({
      result: x - y
    })
  }

  mult(x, y) {
    this.setState({
      result: x * y
    })
  }

  divide(x, y) {
    this.setState({
      result: x / y
    })
  }

  render() {

    return(
      <div className="container">
        <h1>React Calculator</h1>

        <div className="add">
          <input type="text" value={this.state.value} onChange={this.handleChange1}/>
          <span> </span>
          <input type="text" value={this.state.value} onChange={this.handleChange2}/>
          
          <h3>Answer = {this.state.result}</h3>
          <button onClick={ (e) => this.sum(this.state.number1, this.state.number2)}>Add!</button>
          <button onClick={ (e) => this.sub(this.state.number1, this.state.number2)}>Subtract!</button>
          <button onClick={ (e) => this.mult(this.state.number1, this.state.number2)}>Multiply!</button>
          <button onClick={ (e) => this.divide(this.state.number1, this.state.number2)}>Divide!</button>
        </div>
      </div>
    )
  }
}

export default Calculator
