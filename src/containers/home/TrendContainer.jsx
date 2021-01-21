import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrending } from '../../actions/index';
import NetflixMovie from '../../components/movies/NetflixMovie';

const TrendContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchTrending());
        }, []);

        const TrendData = useSelector(state => state.trending.movies, []) || [];


    return (
        <div>
            <div className="content-title">
                <h2>지금 뜨는 콘텐츠</h2>  
            </div>
            <div className="netflixContainer">
                { TrendData.results && TrendData.results.map(movie => (
                    <NetflixMovie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default TrendContainer;