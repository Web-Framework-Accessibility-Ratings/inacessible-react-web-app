import React from 'react';
import img from '../athletics-primary.jpg';

function LinkPurpose() {
    return (
        <div>
            <h1>Image that links somewhere that doesn't make sense.</h1>
            <a href='https://www.rit.edu/'><img src={img} alt={'RIT athletics logo'}/></a>
        </div>
    );
}

export default LinkPurpose;