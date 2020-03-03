import React from 'react';

const loseFocus = () => {
    document.getElementById("input").blur()
}

function Keyboard() {
    return (
        <div>
            <h1>An input that cannot be selected.</h1>
            <p>
                <label>
                    Name
                    <input id="input" type="text" onFocus={() => loseFocus()}/>
                </label>
            </p>
        </div>
    );
}

export default Keyboard;