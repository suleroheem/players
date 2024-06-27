import React from "react";

const Players = () => {
    const players =[
     {
        name: 'lionel messi',
        age: 37,
        country: 'argentina',
        club: 'inter miami',
        position: 'forward',
        speed: 90,
        power: 89,
        shotpower: 97,
        image_url: 'https://images.unsplash.com/photo-1626025437642-0b05076ca301?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlvbmVsJTIwbWVzc2l8ZW58MHx8MHx8fDA%3D',},

       { name: 'crisitiano ronaldo',
        age: 39,
        country: 'portuagal',
        club: 'al-nassar',
        position: 'forward',
        speed: 90,
        power: 89,
        shotpower: 97,
        image_url:'https://images.unsplash.com/photo-1583236728325-aa6cd12594a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9uYWxkb3xlbnwwfHwwfHx8MA%3D%3D',
       },
       { name: 'neymar junior',
        age: 33,
        country: 'brazil',
        club: 'al-hiali',
        position: 'winger',
        speed: 90,
        power: 89,
        shotpower: 97,
        image_url:'https://images.unsplash.com/photo-1529629468183-b9cddd7be13b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV5bWFyfGVufDB8fDB8fHww',},

       {
        name: 'kylian mbappe',
        age: 25,
        country: 'france',
        club: 'real madrid',
        position: 'forward',
        speed: 90,
        power: 89,
        shotpower: 97,
        image_url:'https://images.unsplash.com/photo-1531823540573-d5e8fc4a5485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWJhcHBlfGVufDB8fDB8fHww'



    


    }
]
      return(
        <div className="playerd-wrapper flex ml-36 gap-3.5 mt-32">
            {players.map((player, index) => {
            return (
        <div className="player-container" key={index}>  
            <img className="w-80 h-80 "  src= {player.image_url} /> 
            <div className="player-mover font-bold ">
            <h2 className="name"> Name:{ player.name}</h2>
            <h2 className="age"> Age:{ player.age}</h2>
            <h2 className="country"> Country:{ player.country}</h2>
            <h2 className="club"> Club:{ player.club}</h2>
            <h2 className="position"> Position:{ player.position}</h2>
            <h2 className="speed"> Speed:{ player.speed}</h2>
            <h2 className="power"> Power:{ player.power}</h2>
            <h2 className="shotpower"> Shotower:{ player.shotpower}</h2>
        
        </div>
       </div>
        

      );
       })}
       </div>
       )
};

export default Players;



