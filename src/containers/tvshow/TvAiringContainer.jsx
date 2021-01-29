import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTvAiring } from '../../actions/index';
import Movie from '../../components/movies/Movie';

const TvAiringContainer = () => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchTvAiring());
        }, []);

        const airingData = useSelector(state => state.airingTv.movies, []) || [];

    return (
        <div>
            <p>지금 방영중인 TV 프로그램</p>
            <div className="movieContainer">
                { airingData.results && airingData.results.map(tv => (
                    <Movie props={tv} key={tv.id}/>
                ))}
            </div>
        </div>
    )
}

export default TvAiringContainer;