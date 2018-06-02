import React, { Component } from "react";

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'',
  
    }
  }
  handlePlay(){
  
    if(this.state.name){
      this.props.loginName({Name:this.state.name, Status:'play'})
    }
  }

  handleWatch(){
    
    this.props.loginName({Name:this.state.name, Status:'watch'})
    
    
  }
  handleInputChange(e){
    this.setState({name:e.target.value})
    
  }
  
  render() {
 
    return (
        
      <div className="nameInput">
      <h1>Big 2</h1>
       <input type="text" placeholder="name" value={this.state.name} onChange={this.handleInputChange.bind(this)}/>
       <br />
    <button 
    onClick={this.handlePlay.bind(this)}
    className="btn btn-success">Spela</button>
    
    <button 
    onClick={this.handleWatch.bind(this)}
    className="btn btn-info">Titta</button>
      </div>
    
    );
  }
}

export default Login;
