import React from 'react'
import Topnav from '../Component/Topnav'


class Test extends React.Component{
  constructor(props){
    super(props)
  }
  getValueInTest = (value) =>{
    this.props.getValueFromTest(value)
  }
  render(){
    return(
      <Topnav
        getValueFromTopnav = {this.getValueInTest}
        toTopnavToggle = {this.props.toTestToggle}
        testValueToTopnav = {this.props.testValueToTest}/>
    );
  }
}

export default Test;
