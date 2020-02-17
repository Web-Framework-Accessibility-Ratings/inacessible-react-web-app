import React from 'react';

function InputPurpose() {
    return (
        <>
            <h2>Your details:</h2>
            <label htmlFor="name1">Name:</label>
            <input type="text" name="field1a" autoComplete="email" id="name1"/>
            <label htmlFor="birthday1">Birthday:</label>
            <input type="text" name="field1b" autoComplete="birthday" id="birthday1"/>
        </>
    );
}

export default InputPurpose;