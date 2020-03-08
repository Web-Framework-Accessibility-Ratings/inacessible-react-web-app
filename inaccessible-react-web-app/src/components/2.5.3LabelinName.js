import React from 'react';

const linkStyle = {
    color: '#61DAFB'
}

function LabelInName() {
    return (
        <>
            <h1>
                A link with some parts invisible to screen readers
            </h1>
            <a href="http://www.google.com" style={linkStyle}>
                Goto 
                <span className="accessibly-hidden"> different </span>
                website homepage
            </a>
        </>
    );
}

export default LabelInName;