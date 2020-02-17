import React from 'react';

function Orientation() {
    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                @media screen and (orientation: landscape) {
                    html {
                      transform: rotate(-90deg);
                      transform-origin: left top;
                      width: 100vh;
                      overflow-x: hidden;
                      position: absolute;
                      top: 100%;
                      left: 0;
                    }
                  }
            `}} />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque elementum volutpat cursus. Fusce ultricies sed massa id 
            ultrices. Curabitur et nunc in enim tempor rhoncus fermentum at 
            massa. Sed ut purus eu enim ullamcorper malesuada at at neque. Cras 
            tincidunt magna nisi, sit amet aliquam odio dapibus ac. Integer at 
            nisi ornare, maximus sapien vel, accumsan risus. Suspendisse sodales 
            placerat leo non tempor. Praesent tempus ullamcorper lectus, blandit 
            blandit lorem ultricies ut. Vivamus consequat iaculis mi, non 
            feugiat eros dapibus nec. Pellentesque tortor nunc, gravida a 
            suscipit vitae, condimentum in lorem. Nullam dignissim ante lobortis 
            nulla efficitur pellentesque at ac ante. Pellentesque at elit at 
            purus suscipit finibus. Quisque faucibus arcu eget nibh ultricies 
            aliquam. Sed blandit lacinia orci, a euismod magna sagittis 
            efficitur. Pellentesque ut orci vel ligula aliquet auctor.
            Morbi ornare ipsum porta dolor eleifend, in sodales justo volutpat. 
            Sed facilisis urna non libero pharetra accumsan. Donec vestibulum 
            est neque, nec maximus est egestas quis. Vivamus sed vulputate nunc, 
            vitae imperdiet metus. Mauris ultrices risus tortor, sed blandit 
            mauris porttitor sed. Aenean sed ligula et arcu tristique elementum 
            iaculis dapibus justo. Aliquam auctor augue elit, vitae semper eros 
            sodales id. Donec auctor dignissim diam. Sed commodo sollicitudin 
            erat mattis convallis. Donec eget massa vitae risus accumsan blandit. 
            Quisque mattis turpis eget purus lobortis luctus. Proin non felis 
            fermentum, efficitur ipsum sit amet, vestibulum dolor. Curabitur 
            fringilla euismod quam id imperdiet. Nam mattis libero at magna 
            tincidunt, sit amet rutrum purus vulputate. Integer quis urna 
            libero. Curabitur ac molestie arcu. Aenean non nisl sit amet purus 
            vulputate imperdiet. Nullam vel quam feugiat, sagittis odio eget, 
            efficitur nulla. Nulla ut gravida ante. Quisque porta, augue quis 
            pulvinar dictum, arcu purus venenatis urna, sed suscipit nunc dolor 
            in odio. Curabitur cursus a mauris sed gravida. Quisque sed commodo 
            nisi, in placerat nulla. Phasellus et arcu et augue vulputate 
            ultrices.
            </p>
        </>
    );
}

export default Orientation;