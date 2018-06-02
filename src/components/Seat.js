import React, { Component } from "react";

class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player:[],
      players: [],
      seat1taken: false,
      seat2taken: false,
      seat3taken: false,
      seat4taken: false,
      seated:false,
      seat1:'',
      seat2:'',
      seat3:'',
      seat4:'',
      currentHand:[],
      currentAction:'',
      currentHoldings:[],
     
    };
  }

  

  componentWillReceiveProps(prev, next){
    if(prev !== next){
  
  
   
     prev.seats.map(x=>{
     
      
      if(x.Name === this.props.player.Name){
        this.setState({
          currentHoldings:x.hand
        })
      }
      
       
       if(x.seat === '1'){
          this.setState({
            seat1taken:true,
          })
       }
       
       if(x.seat === '2'){
        this.setState({
          seat2taken:true,
        })
     }
     if(x.seat === '3'){
      this.setState({
        seat3taken:true,
      })
   }
   if(x.seat === '4'){
    this.setState({
      seat4taken:true,
    })
 }
     
       
     })
     
   
    }
 
    
}
    

  handleSeat(e) {
    this.props.handleSeat(e.target.value)
    
    if(e.target.value === '1')
    this.setState({
      seated:true,
    seat1taken:true
    
    })
    if(e.target.value === '2')
    this.setState({
      seated:true,
    seat2taken:true
    })
    if(e.target.value === '3')
    this.setState({
      seated:true,
    seat3taken:true
    })
    if(e.target.value === '4')
    this.setState({
      seated:true,
    seat4taken:true
    })
  }

  handleCardClick(e){
   
   const tempHold = this.state.currentHand
   tempHold.push(e.target.id)
   const newHold = this.state.currentHoldings.filter(x=>{
     return (
       x !== e.target.id
     )
     
    })
    
   this.setState({
     currentHand: tempHold,
     currentHoldings:newHold
   })
  }

  handlePlay(){
 this.setState({
   currentHand:[]
 })
   
  }
  render() {




let cards = this.state.currentHoldings.map(x=>{
       return(
         <div key={x}
         id={x}
         onClick={this.handleCardClick.bind(this)}
         >{x}</div>
       )
     })
     let handToPlay = this.state.currentHand.map(x=>{
      return(
        <div key={x}
        id={x}
        
        >{x}</div>
      )
    })
   

  
 
  

 
  
    let players = this.props.seats.map(x => {
    
      return (
     
        <button className={` btn btn-outline-secondary seat${x.seat}`} key={x.Name}>
          {x.Name} 
        </button>
       
      );
    });


    return (
      <div>

      <div className="seats">
        {players}

        {this.state.seat1taken || this.state.seated ? '':<button className="btn btn-outline-secondary seat1" value={1} onClick={this.handleSeat.bind(this)}>
          seat1
        </button>}
        {this.state.seat2taken || this.state.seated ? '':<button className="btn btn-outline-secondary seat2" value={2} onClick={this.handleSeat.bind(this)}>
          seat2
        </button>}
        {this.state.seat3taken || this.state.seated ? '':<button className="btn btn-outline-secondary seat3" value={3} onClick={this.handleSeat.bind(this)}>
          seat3
        </button>}
        {this.state.seat4taken || this.state.seated ? '':<button className="btn btn-outline-secondary seat4" value={4} onClick={this.handleSeat.bind(this)}>
          seat4
        </button>}

        
      </div>
      <div className="currentSelection">
      {handToPlay}
      </div>
      <div className="cardStyle">
      
      {cards}
      
     </div>
      <div className="actionButtons">
      <button onClick={this.handlePlay.bind(this)} className="btn btn-outline-secondary">Play</button>
      <button className="btn btn-outline-secondary">Pass</button>
      </div>
      </div>
    );
  }
}

export default Seat;
