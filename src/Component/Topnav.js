import React from 'react'
import './Topnav.css'

class Topnav extends React.Component{
  constructor(props){
    super(props)
  }
  btnClick =(data)=>{
    this.props.getValueFromTopnav(data)
  }
  render(){
    return(
      <div>
        <div className="topnav">
          <p>TestValue :: {this.props.testValueToTopnav}</p>
        </div>
        <button
          onClick={this.props.toTopnavToggle}
          className="button">Toggle</button>
        <input
          type="text"
            onChange={
              (e)=>this.btnClick(e.target.value)
            }
            className="buttonPass"></input>
      </div>
    );
  }
}



export default Topnav;
