import React, { useEffect } from 'react';

function ConsistentNav() {
    useEffect(()=>{
        document.getElementById('links').style.flexDirection = 'column-reverse';
        return ()=>{
            document.getElementById('links').style.flexDirection = 'column';
        }
    });
    return (
        <>
            <h1>The navbar is now reversed</h1>
        </>
    )
};

export default ConsistentNav;