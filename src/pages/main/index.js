
import React from 'react';

import api from '../../services/api'


import './style.css'




const Main = (props)=>{

    
    
    return (

        <div className="home-background">

            <div className="home-container">

            <div className="title-container">
                <h1 id="title1">PEDRA</h1>
                <h1 id="title2">PAPEL</h1>
                <h1 id="title3">TESOURA</h1>
            </div>
            
            <div className="player-container">

                <h2 className="player1">Player 1</h2>
                <h2 className="player1 hidden">Player 2</h2>
            </div>

            <div className="selection-container">

                <button  id="pedra"></button>
                <button  id="papel"></button>
                <button  id="tesoura"></button>
            </div>


            </div>

        </div>
       

    )
    
}

export default Main;