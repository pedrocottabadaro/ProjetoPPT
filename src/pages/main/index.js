
import React, { useState } from 'react';

import api from '../../services/api'


import './style.css'




const Main = (props)=>{

    let [p1,setP1]=useState(0)
    let [p2,setP2]=useState(0)

    let player1=document.querySelector("#p1")
    let player2=document.querySelector("#p2")

    let pedra=document.getElementById('pedra')
    let papel=document.getElementById('papel')
    let tesoura=document.getElementById('tesoura')

    let [valor1,setValor1]=useState("")
    let [valor2,setValor2]=useState("")
    
    const atribuiValores=(escolhido)=>{
        let player1=document.querySelector("#p1")
        

            if(!player1.classList.contains("hidden")){
                setValor1(escolhido)
            }
            else{
                setValor2(escolhido)
            }
        
          

    }

    const escolheuTesoura=()=>{
        document.getElementById("tesoura").classList.toggle("pressed")
        document.getElementById("pedra").classList.toggle("opacity")
        document.getElementById("pedra").toggleAttribute("disabled")
        document.getElementById("papel").classList.toggle("opacity")
        document.getElementById("papel").toggleAttribute("disabled")
    }

    const escolheuPedra=()=>{
        document.getElementById("pedra").classList.toggle("pressed");
        document.getElementById("papel").classList.toggle("opacity");
        document.getElementById("papel").toggleAttribute("disabled");
        document.getElementById("tesoura").classList.toggle("opacity");
        document.getElementById("tesoura").toggleAttribute("disabled");
    }

    const escolheuPapel=()=>{
        document.getElementById("papel").classList.toggle("pressed");
        document.getElementById("pedra").classList.toggle("opacity");
        document.getElementById("pedra").toggleAttribute("disabled");
        document.getElementById("tesoura").classList.toggle("opacity");
        document.getElementById("tesoura").toggleAttribute("disabled");
    }
    
    return (

        <div className="home-background">

            <div className="home-container">

                <div className="title-container">
                    <h1 id="title1">PEDRA</h1>
                    <h1 id="title2">PAPEL</h1>
                    <h1 id="title3">TESOURA</h1>
                </div>
            
                <div className="player-container">

                    <h2  id="p1"className="player">Player 1</h2>
                    <h2 id="p2" className="player hidden">Player 2</h2>
                   
                
                </div>

                <div className="selection-container">

                    <button  id="pedra" onClick={()=>{
                        escolheuPedra();
                        atribuiValores("pedra")
                    }}></button>
                    <button onClick={()=>{
                        escolheuPapel();
                        atribuiValores("papel")
                    }} id="papel"></button>
                    <button  id="tesoura" onClick={()=>{
                        escolheuTesoura();
                        atribuiValores("tesoura")  ; 
                        
                    }}></button>
                </div>
                <div className="submit-container">
                    <div>
                        <button onClick={()=>{
                            
                            if(valor1.length>4&&valor2.length>4){
                            switch (1>0) {
                                
                                case (valor1==="tesoura"&&valor2==="pedra"):
                                    setP2(p2+1)
                                    setValor1("")
                                    setValor2("")
                          
                                    break;
                                
                                case (valor1==="tesoura"&&valor2==="papel"):
                                    setP1(p1+1)
                                    setValor1("")
                                    setValor2("")
                                 
                                    break;

                                case (valor1==="papel"&&valor2==="pedra"):
                                    setP2(p1+1)
                                    setValor1("")
                                    setValor2("")
                                    break;
                                
                                case (valor1==="papel"&&valor2==="tesoura"):
                                    setP1(p2+1)
                                    setValor1("")
                                    setValor2("")
                                    break;

                                case (valor1==="pedra"&&valor2==="papel"):
                                    setP2(p2+1)
                                    setValor1("")
                                    setValor2("")
                                  
                                    break;
                                
                                case (valor1==="pedra"&&valor2==="tesoura"):
                                    setP1(p1+1)
                                    setValor1("")
                                    setValor2("")
                                  
                                    break;

                                default:
                                    break;
                            }
                        }
                        else{
                            if(valor1==="pedra"||valor2==="pedra"){
                                escolheuPedra();
                            }
                            else if(valor1==="papel"||valor2==="papel"){
                                escolheuPapel();
                            }
                           else if(valor1==="tesoura"||valor2==="tesoura"){
                                escolheuTesoura();
                            }
                        }
                            document.querySelector('#p1').classList.toggle("hidden")
                            document.querySelector('#p2').classList.toggle("hidden")

                            
                            

                            
                        }}>
                            SUBMIT
                        </button>

                        <button id="botao-placar" onClick={()=>{
                            setP1(0)
                            setP2(0)
                            setValor1("")
                            setValor2("")                            

                            
                        }}>
                            RESET
                        </button>
                    </div>
                   
                <h1 id='placar'>{p1}-{p2}</h1>
                </div>
                
            </div>

        </div>
       

    )
    
}

export default Main;