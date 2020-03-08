import React, {useEffect} from 'react';

function ConsistentIdentification() {
    useEffect(()=>{
        document.getElementById('links').setAttribute('role', 'list')
        return () => {
            document.getElementById('links').setAttribute('role', 'navigation')
        }
    })
    return (
        <>
            <h1>The role of the navbar has changed.</h1>
        </>
    )
}

export default ConsistentIdentification;