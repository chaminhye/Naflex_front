import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieScreen } from '../../actions/index';
import Movie from '../../components/movies/Movie';

const MovieScreenContainer = () => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchMovieScreen());
        }, []);

        const screenData = useSelector(state => state.screenMovie.movies, []) || [];

    return (
        <div>
            <p>지금 상영중인 영화</p>
            <div className="movieContainer">
                { screenData.results && screenData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default MovieScreenContainer;