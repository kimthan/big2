import React, { Component } from "react";
import "./App.css";
import openSocket from "socket.io-client";
import Login from "./components/Login";
import { PlayersInfo } from "./components/PlayersInfo";
import Header from "./components/Header";
import Seat from "./components/Seat";
const socket = openSocket("192.168.9.183:8000");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket,
      playerInfo: "",
      users:[],
    };
  }

  componentWillMount() {
    socket.on('updateUsers',(users)=>{
    
      
      this.setState({
        users
      })
    })
    socket.on('user disconnect', (users)=>{
      this.setState({
        users
      })
      
    })
    socket.on('upd', (users)=>{
      this.setState({
        users
      })
      
    })

  }

  handleLoginName(name) {
    socket.emit('connection')
    this.setState({
      playerInfo: name
    });
  }
  handleSeat(seat){
socket.emit('seated', {Name:this.state.playerInfo.Name, seat, Status:this.state.playerInfo.Status})

  }
  render() {


    return (
      <div>
        
        {this.state.playerInfo.Name? <Seat player={this.state.playerInfo} seats={this.state.users} handleSeat={this.handleSeat.bind(this)}/>:<Login loginName={this.handleLoginName.bind(this)} seats={this.state.users}/>}
        
      
      </div>
    );
  }
}

export default App;
