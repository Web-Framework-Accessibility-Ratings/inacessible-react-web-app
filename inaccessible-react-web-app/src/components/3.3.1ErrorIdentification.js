import React from 'react';

const isValid = () => {
    const val = document.getElementById('number').value;
    if (val < 0 || val > 10) {
        alert('Invalid Input');
    }
}

function ErrorId() {
    return (
        <>
            <h1>A form with poor error identification</h1>
            <form>
                <span>Enter a number &#x3C; 10</span><br/>
                <input id='number' type='text'/><br/>
                <button type='submit' onClick={() => {isValid()}}>Submit</button>
            </form>
        </>
    )
};

export default ErrorId;