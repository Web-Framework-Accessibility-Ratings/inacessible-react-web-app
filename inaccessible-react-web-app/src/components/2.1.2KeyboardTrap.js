import React from 'react';

const focusId = id => {
    window.setTimeout(document.getElementById(id).focus(), 0);
}

function KeyboardTrap() {
    return (
        <div>
            <h1>A keyboard trap you cannot escape.</h1>
            <p>
                <label>
                    Name
                    <input id="name" type="text" tabIndex='-1' onBlur={()=>focusId('email')}/>
                </label>
                <label>
                    Email
                    <input id="email" type="text" tabIndex='-2' onBlur={()=>focusId('name')}/>
                </label>
            </p>
        </div>
    );
}

export default KeyboardTrap;