import React, { useState } from 'react';
import Modal from './Modal';

const NetflixMovie = (props) => {
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    }

    const closeModal = () => { 
        setModal(false);
    }

    const title = props.props.title == null ? props.props.name :props.props.title;

    return (
        <>
            <div className="netflixMovie"  onClick={() => showModal()}>
                <p></p>
                <img src={`https://image.tmdb.org/t/p/original/${props.props.poster_path}`} alt={props.props.id}/>
            </div>
            
            <Modal
                containerName={"modalContainer " + (modal ? "show" : "hide")}
                name={title}
                overview={props.props.overview}
                show={modal}
                img={props.props.backdrop_path}
                id={props.props.id}
                onClick={() => closeModal()}
            />
         </>   
    )
}

export default NetflixMovie;