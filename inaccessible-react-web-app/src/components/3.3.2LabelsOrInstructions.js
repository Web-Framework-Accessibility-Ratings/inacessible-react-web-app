import React from 'react';

function LabelsOrInstructions(){
    return (
        <>
            <h1>A form with no instructions</h1>
            <label>
                (
                <input type='text'/>
            </label>
            <label>
                )
                <input type='text'/>
            </label>
            <label>
                -
                <input type='text'/>
            </label>
        </>
    )
};

export default LabelsOrInstructions;