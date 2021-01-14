import React from 'react';
import ReactPlayer from 'react-player'

const MoviePlayer = ({match}) => {
    const url = `https://www.youtube.com/watch?v=${match.params.id}`

    return(
        <div className="player">
            <ReactPlayer playing height="100vh" width="100%" 
            url={url}
            controls
            // onPause={}
            // onEnded={}
            
            />
        </div>
    )
}

export default MoviePlayer;

