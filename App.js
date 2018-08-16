import React, { Component } from 'react';
import './App.css';
import Test from './Page/Test'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggle: false,
      testValueInApp: '',
      ValueFromPassValue:''
    }
  }
  toggleTestValue=()=>{
    this.setState((s)=>{
      return {toggle: !s.toggle}
    })
    if(this.state.toggle){
      this.state.testValueInApp = 15
    }else{
      this.state.testValueInApp = 30
    }
  }
  getValueInApp=(value)=>{
    this.state.ValueFromPassValue = value
    this.setState(this.state)
  }
  render() {
    return (
      <div>
        <Test
          getValueFromTest = {this.getValueInApp}
          toTestToggle = {this.toggleTestValue}
          testValueToTest = {this.state.testValueInApp}/>
        <p style={{position:'fixed',top: '6rem'}}>ValueFromPassValue ::: {this.state.ValueFromPassValue}</p>
      </div>
    );
  }
}

export default App;
