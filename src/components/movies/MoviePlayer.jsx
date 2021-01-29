import React from 'react';
import ReactPlayer from 'react-player'

const MoviePlayer = ({match}) => {
    const url = `https://www.youtube.com/watch?v=${match.params.id}`

    const saveViewingRecording = () => {
        // console.log('MoviePlayer :: ');

    }
    return(
        <div className="player">
            <ReactPlayer playing height="100vh" width="100%" 
            url={url}
            controls
            id="you_player"
            onPause={() => saveViewingRecording(this)}
            />
        </div>
    )
}

export default MoviePlayer;

