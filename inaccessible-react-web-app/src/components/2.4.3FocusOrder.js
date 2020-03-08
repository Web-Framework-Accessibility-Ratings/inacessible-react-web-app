import React from 'react';

function FocusOrder() {
    return (
        <div>
            <h1>A keyboard trap you cannot escape.</h1>
            <p>
                <label>
                    Name
                    <input id="name" type="text" tabIndex='4'/>
                </label><br/>
                <label>
                    Email
                    <input id="email" type="text" tabIndex='2'/>
                </label><br/>
                <label>
                    Address
                    <input id="address" type="text" tabIndex='1'/>
                </label><br/>
                <label>
                    Company
                    <input id="company" type="text" tabIndex='3'/>
                </label>
            </p>
        </div>
    );
}

export default FocusOrder;