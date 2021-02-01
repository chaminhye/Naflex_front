import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistoryList } from '../actions/index';
import Modal from './movies/Modal';

const  MyHistoryList = (props) => {
    const data ={
        "userIdx" : props.props
    }

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getHistoryList(data));
    }, []);

    const historyData = useSelector(state => state.myList.myData, []) || [];

    // modal popup
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    }

    const closeModal = () => { 
        setModal(false);
    }

    return(
        <>
            <div className="layout--recently">
                <h2>최근 시청 목록</h2>
                
                <div className="myMovieContainer">
                    {historyData.map(myData => (
                        <>
                            <div className="myMovie" onClick={() => showModal()}>
                                <img src={`https://image.tmdb.org/t/p/original/${myData.vodImg}`} alt={myData.vodIdx}/>
                                <p>{myData.vodName}</p>
                            </div>
                            <Modal
                                containerName={"modalContainer " + (modal ? "show" : "hide")}
                                name={myData.vodName}
                                show={modal}
                                img={myData.vodImg}
                                onClick={() => closeModal()}
                            />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
export default MyHistoryList;