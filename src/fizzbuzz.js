import React, { Component } from 'react';

export default class FizzBuzz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      listObj: [],
      checked: false
    };

    //this.fizzBuzz = this.fizzBuzz.bind(this);
    this.addNumber = this.addNumber.bind(this);
    this.checked = this.checked.bind(this);
    //this.hideEven = this.hideEven.bind(this);
  }

  range (from, to, checked) {
    var ar = [];
    for (var i=from; i<=to; i++){
      if (checked && i%2==0) continue;
      ar.push(i)
    }
    return ar;
  }

  checked (event) {
    var stateNow = this.state.checked;
    var valueNow = this.state.value;
    this.setState({
      checked: !stateNow,
      listObj: this.range(1, valueNow, !stateNow).map((number)=>
        <li key={number}>{this.fizzBuzz(number)}</li>
      )
    });
  }

  fizzBuzz(n) {
    if (n % 15 == 0) return 'FizzBuzz';
    else if (n % 3 == 0) return 'Fizz';
    else if (n % 5 == 0) return 'Buzz';
    else return n + "";
  }

  addNumber(event) {
    var newStateValue = this.state.value + 1;
    var checked = this.state.checked;
    this.setState({
      value: newStateValue,
      listObj: this.range(1, newStateValue, checked).map((number)=>
        <li key={number}>{this.fizzBuzz(number)}</li>
      )
    });
  }



  render() {
    return (
      <div>
        <p>
          <input type="button" value="追加" onClick={this.addNumber}/>
          <input type="checkbox" onChange={this.checked}/>
          偶数を表示しない
        </p>
        <ul>
          {this.state.listObj}
        </ul>
      </div>
    );
  }
}
