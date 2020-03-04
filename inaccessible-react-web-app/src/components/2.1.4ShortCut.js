import React, {useEffect} from 'react';

const keyHandler =  e => {
    if(e.code === "KeyA") {
        window.setTimeout(document.getElementById('name').focus(), 0);
    }
}

function ShortCut() {
    useEffect(() => {
        document.addEventListener('keyup', keyHandler)

        return function cleanup() {
            document.removeEventListener("keyup", keyHandler)
        }
    });
    
    return (
        <div id='shortcut'>
            <h1>Press 'a' to jump to name.</h1>
            <p>
                <label>
                    Name
                    <input id="name" type="text" tabIndex='-1'/>
                </label>
                <label>
                    Email
                    <input id="email" type="text" tabIndex='-2'/>
                </label>
            </p>
        </div>
    );
}

export default ShortCut;