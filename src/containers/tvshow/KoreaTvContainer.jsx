import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTvKorea } from '../../actions/index';
import Movie from '../../components/movies/Movie';

const KoreaTvContainer = () => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchTvKorea());
        }, []);

        const airingData = useSelector(state => state.koreaTv.movies, []) || [];

    return (
        <div>
            <p>한국 TV 프로그램</p>
            <div className="movieContainer">
                { airingData.results && airingData.results.map(tv => (
                    <Movie props={tv} key={tv.id}/>
                ))}
            </div>
        </div>
    )
}

export default KoreaTvContainer;