import React from 'react';

const textColor = {
    border: "thin solid white",
    borderRadius: "2px",
    color: "#B8B8B8"
}

function NonTextContrast() {
    return (
        <div>
            <h1>Remove the ability to determine if a link is selected</h1>
            <p>
                Lorem <a style={textColor} href="/">ipsum</a> dolor sit amet, consectetur adipiscing elit. 
                Suspendisse posuere consectetur diam, laoreet vulputate lacus 
                sollicitudin auctor. Phasellus nec sapien ligula. In lobortis 
                finibus egestas. Suspendisse purus lorem, congue sit amet 
                laoreet nec, blandit vitae odio. Integer pretium est dui, 
                pulvinar consectetur risus scelerisque a. Donec varius 
                consectetur sem, ac varius justo blandit quis. Morbi lobortis 
                tempus bibendum. <a style={textColor}  href="/">Phasellus</a> erat mauris, laoreet et quam ac, 
                pellentesque malesuada quam. Donec at dolor tortor. Cras mollis 
                risus id ex dignissim, at dapibus purus faucibus. Nullam eu mi 
                eget massa mattis aliquet. Praesent rutrum erat odio. Aenean 
                consequat pharetra lectus vitae suscipit.
            </p>
        </div>
    );
}

export default NonTextContrast;