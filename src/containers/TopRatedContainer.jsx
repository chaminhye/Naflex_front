import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopRated } from '../actions/index';
import Movie from '../components/Movie';


const TopRatedContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchTopRated());
        }, []);

        const topRatedData = useSelector(state => state.topRated.movies, []) || [];

    return (
        <div>
            <p>Top Rated Movies</p>
            <div className="movieContainer">
                { topRatedData.results && topRatedData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default TopRatedContainer;
