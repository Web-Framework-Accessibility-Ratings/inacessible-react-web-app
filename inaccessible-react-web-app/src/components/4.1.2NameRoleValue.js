import React from 'react';

const clear = () => {
    document.getElementById('name').value = ""
}

function NameRoleValue() {
    return (
        <>
            <h1>Span as a submit</h1>
            <label>
                <span>Name</span>
                <input id='name' type='text'/>
            </label>
            <br/>
            <span onClick={()=>clear()}>Submit</span>
        </>
    )
}

export default NameRoleValue