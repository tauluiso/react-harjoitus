import React from "react";
import './Ristinolla.css'
import {Board} from "./Board";
import { useState } from "react";

const initialBoard=['', '', '', '', '', '', '', '', ''];

export const Ristinolla =()=>{
    const[gameState, setGameState] = useState(initialBoard);
    const[isXTurn, setIsXTurn] = useState(true);
 
    const onSquareClick =(index)=>{
        let strings = Array.from(gameState);
        if(strings[index] !==''){
            return;
        }
    }
    return(
        <div>
            <h1>Ristinolla</h1>
            <Board gameState={gameState}/>
        </div>
    );
}