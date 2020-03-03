import React from 'react';
import text from '../imageOfText.png';

function ImageOfText() {
    return (
        <div>
            <h1>Image of some code used in this application</h1>
            <img src={text} alt={'Code used to create the TextAlternatives page'}/>
        </div>
    );
}

export default ImageOfText;