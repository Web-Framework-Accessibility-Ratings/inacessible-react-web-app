import React from 'react';

const styleWithLinks = {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
        color: 'red'
    },
    '&:visited': {
        textDecoration: 'none',
        color: 'white'
    }
}

function UseOfColor() {
    return (
        <div>
            <h1>Some inaccessible content without a role</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse posuere consectetur diam, laoreet vulputate lacus 
                sollicitudin auctor. Phasellus nec sapien ligula. In lobortis 
                finibus egestas. Suspendisse purus lorem, congue sit amet 
                laoreet nec, blandit vitae odio. Integer pretium est dui, 
                pulvinar consectetur <a style={styleWithLinks} target={'new'} href={'http://www.google.com'}>risus</a> scelerisque a. Donec varius 
                consectetur sem, ac varius justo blandit quis. Morbi lobortis 
                tempus bibendum. Phasellus erat mauris, laoreet et quam ac, 
                pellentesque malesuada quam. Donec at dolor tortor. Cras mollis 
                risus id ex dignissim, at dapibus purus faucibus. Nullam eu mi 
                eget massa mattis aliquet. Praesent rutrum erat odio. Aenean 
                consequat pharetra lectus vitae suscipit.
            </p>
        </div>
    );
}

export default UseOfColor;