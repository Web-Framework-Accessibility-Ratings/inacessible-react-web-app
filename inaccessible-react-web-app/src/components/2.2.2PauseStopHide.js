import React, { useEffect } from 'react';

let x;

const change = () => {
    let color;
    if (x === 1) {
        color = "red";
        x = 2;
    } else {
        color = "green";
        x = 1;
    }

    document.getElementById("flashingBackground").style.background = color;
}

let background

function TimeAdjustable() {
    useEffect(()=>{
        background = setInterval(change, 4000)
        return () => {
            clearInterval(background)
        }
    })
    return (
        <div>
            <h1>Moving content without ability to stop</h1>
            <div id="flashingBackground">
                Background color that changes.
            </div>
        </div>
    );
}

export default TimeAdjustable;