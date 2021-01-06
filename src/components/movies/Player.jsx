import React from 'react';

const Player = () => {
    return(
        // <ReactPlayer
        // url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        // config={{
        //     youtube: {
        //     playerVars: { showinfo: 1 }
        //     },
        //     facebook: {
        //     appId: '12345'
        //     }
        // }}
        // />
        <div className="playerContainer">
            <video controls>
                <source src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'></source>
            </video>
        </div>
    )
}

export default Player;