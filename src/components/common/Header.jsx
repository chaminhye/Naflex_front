import React from 'react';
import { FiInfo, FiPlay, FiPlus } from 'react-icons/fi';

const Header = (props) => {

    return (
        <>
            <header>
            <div className="headerContainer">
                <img src={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`} alt={props.id}/>
                <div className="headerContents">
                    <h1>{props.name}</h1>
                    <p>{props.overview}</p>
                    <div className="btn">
                        <button><FiPlay/><span>PLAY</span></button>
                        <button><FiPlus/><span>MY LIST</span></button>
                        <button><FiInfo/><span>DETAILS</span></button>
                    </div>
                </div>
            </div>
            </header>
        </>
        )
}

export default Header;