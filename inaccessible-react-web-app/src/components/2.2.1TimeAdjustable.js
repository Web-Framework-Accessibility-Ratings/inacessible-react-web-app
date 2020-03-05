import React, { useEffect } from 'react';

const redirect = () => {
    window.location.href="/"
}

function TimeAdjustable() {
    useEffect(()=>{
        window.setTimeout(redirect, 1000)
    });

    return (
        <div>
            <h1>No timing adjustment</h1>
            <p>
                You will be returned to the home page in a few seconds.
            </p>
        </div>
    );
}

export default TimeAdjustable;