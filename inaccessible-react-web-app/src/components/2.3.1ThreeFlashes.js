import React, { useEffect } from 'react';

let x;
let background;
let counter = 10;

const change = () => {
    let color;
    if (x === 1 && counter > 0) {
        color = "#9E0000";
        x = 2;
        counter--;
    } else {
        color = "green";
        x = 1;
    }

    document.getElementById("flashingBackground").style.background = color;
}

function ThreeFlashes() {
    useEffect(()=>{
        background = setInterval(change, 100)
        return () => {
            clearInterval(background)
        }
    })
    return (
        <div>
            <h1>A few fast flashes</h1>
            <div id="flashingBackground">
                Background color that changes.
            </div>
        </div>
    );
}

export default ThreeFlashes;