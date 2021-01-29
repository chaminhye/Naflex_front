import axios from 'axios';
import React from 'react';
import { FiPlay } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { FiInfo } from 'react-icons/fi';
import  { useHistory} from 'react-router'; 
import YoutubeService from '../../utils/YoutubeService';

const Modal = ({ name, overview, img, show, containerName, id, onClick}) => {

    const data = {
        "vodIdx" : id,
        "vodName" : name,
        "userIdx" : localStorage.getItem('userIdx'),
        "vodImg" : img
    }

    const history = useHistory();
    const goPlay = () => {
        YoutubeService.getSearchMovieName(data)
        .then((response) => {
            const videoId = response.data.items[0].id.videoId
            console.log('goPlay ::' ,response)
            history.push(`/MoviePlay/${videoId}`)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        show ?
        <div className={containerName} onClick={onClick}>
            <div className="modal">
                <img src={`https://image.tmdb.org/t/p/original/${img}`} alt="bg"/>
                <div className="bg"></div>
                <div className="modal-content">
                    <h1>{name}</h1>
                    <p>{overview}</p>
                    <div className="btn">
                        <button onClick={() => goPlay()}><FiPlay/><span>PLAY</span></button>
                        <button><FiPlus/><span>MY LIST</span></button>
                        {/* <button><FiInfo/><span>DETAILS</span></button> */}
                    </div>
                </div>
            </div>
        </div>
        :
        null
    )
}

export default Modal;






