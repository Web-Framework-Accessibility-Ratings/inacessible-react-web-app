import React from 'react';

function AudioControl() {
    return (
        <div>
            <h1>There should now be some audio playing.</h1>
            <audio src={'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'} autoPlay loop/>
        </div>
    );
}

export default AudioControl;