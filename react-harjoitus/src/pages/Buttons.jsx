import React from "react";
import { useState } from "react";

export const Buttons = () =>{



const[count, setCount] = useState(0);
const[count2, setCount2] = useState(0);

function laskeKlikit(){
    setCount(count +1);
}

function countClicks(){
    setCount2(count2 +1);
}

function resetCount(){
    setCount(0);
    setCount2(0);
}

    return(
        <div>

            <button onClick={laskeKlikit}>Olet painanut tätä nappia {count} kertaa.</button>
            <button onClick={countClicks}>Clicked {count2} times!</button>
            <button onClick={resetCount}>Clear</button>
        </div>

    )


}