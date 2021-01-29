import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import {getDetailInfo} from '../../actions/index';

const MyMovie = (props) => {
console.log('MyMovie :: ',props)
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    }

    const closeModal = () => { 
        setModal(false);
    }

    return (
        <>
            <div className="myMovie" onClick={() => showModal()}>
                <img src={`https://image.tmdb.org/t/p/original/${props.vodImg}`} alt={props.vodIdx}/>
                <p>{props.vodName}</p>
            </div>
            <Modal
                containerName={"modalContainer " + (modal ? "show" : "hide")}
                name={props.vodName}
                show={modal}
                img={props.vodImg}
                onClick={() => closeModal()}
            />
        </>
    )
}

export default MyMovie;