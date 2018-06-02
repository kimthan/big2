const io = require("socket.io")();
const Cards = require('./src/Cards')
let users = [];

var deal = function(){
    var card = Math.floor(Math.random() * Cards.length);
    return Cards.splice(card, 1)[0];
};


    

    const hand1 = []
    for(i = 0; hand1.length < 11;i++){
        hand1.push(deal())
    }
    const hand2 = []
    for(i = 0; hand2.length < 11;i++){
        hand2.push(deal())
    }
    const hand3 = []
    for(i = 0; hand3.length < 11;i++){
        hand3.push(deal())
    }
    const hand4 = []
    
    for(i = 0; hand4.length < 11;i++){
        hand4.push(deal())
    
}



io.on("connection", socket => {
    

    
  console.log("connected user");
  socket.on("seated", seat => {
   
  
  
      if(seat.seat === '1'){
        users.push({...seat, gameId:socket.id, hand:hand1})
      }
      if(seat.seat === '2'){
        users.push({...seat, gameId:socket.id, hand:hand2})
      }
      if(seat.seat === '3'){
        users.push({...seat, gameId:socket.id, hand:hand3})
      }
      if(seat.seat === '4'){
        users.push({...seat, gameId:socket.id, hand:hand4})
      }
  
      
    
   io.emit('updateUsers', users)
    
   
  });

  socket.on('connection',()=>{
      io.emit('upd', users)
      
  })

  socket.on("disconnect", () => {
      
    let update = users.filter(x=>{
        return(
            x.gameId !== socket.id
        )
    })
    users=update
    io.emit('user disconnect', users)
  
    console.log("disconnected user");
  });
});

const port = 8000;
io.listen(port);
console.log("listening on port ", port);
