import React from 'react';
let temp = 0
const changeContext = () => {
    if (temp < 1){
        window.open('http://www.google.com');
        temp = 1;
    }
}

function OnInput() {
    return (
        <>
            <h1>An input that opens a new window.</h1>
            <p>
                <label>
                    Name
                    <input id="input" type="text" onFocus={() => changeContext()}/>
                </label>
            </p>
        </>
    )
};

export default OnInput;