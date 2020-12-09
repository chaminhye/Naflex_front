import React, { useState } from 'react';
import Modal from './Modal';

/**
 *      /src/component 폴더는 React 컴포넌트로 구성된 폴더, 컴포넌트를 보통 도메인별로 구분
 *          - container component : 여러개의 프레젠테이션 컴포넌트로 구성, 비즈니스 로직 구현 O
 *          - presentational component : 일반적으로 알고 있는 UI컴포넌트, 비즈니스 로직 구현 X
 * 
*/
const Movie = (props) => {

    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    }

    const closeModal = () => { 
        setModal(false);
    }


    return (
        <>
            <div className="movie" onClick={() => showModal()}>
                <img src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`} alt={props.props.id}/>
            </div>
            <Modal
                containerName={"modalContainer " + (modal ? "show" : "hide")}
                name={props.props.title}
                overview={props.props.overview}
                show={modal}
                img={props.props.backdrop_path}
                onClick={() => closeModal()}
            />
        </>
    )
}

export default Movie;