import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailInfo } from '../actions/index';
import Header from '../components/common/Header';
import { FiInfo, FiPlay, FiPlus } from 'react-icons/fi';

const HeaderContainer = (props) => {
    const id = props.type +'_detail_id';
    
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getDetailInfo(props.type ,id));
    },[]);

    const data = useSelector(state => state.detail.info, []) || [];
    
    return (
        <>
            <header>
                <div className="headerContainer">
                    <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt={data.id}/>
                    <div className="headerContents">
                        <h1>{data.name}</h1>
                        <p>{data.overview}</p>
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

export default HeaderContainer;