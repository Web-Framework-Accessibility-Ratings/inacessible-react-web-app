import React from 'react';
import logo from '../logo.svg';

function ImageNoAlt() {
    return (
        <div>
            <h1>Image without alt text</h1>
            <img src={logo}/>
        </div>
    );
}

export default ImageNoAlt;