import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHorrorMovies } from '../../actions/index';
import Movie from '../../components/movies/Movie';

const HorrorContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchHorrorMovies());
        }, );

        const horrorData = useSelector(state => state.horror.movies, []) || [];


    return (
        <div>
            <p>SF & 호러</p>
            <div className="movieContainer">
                { horrorData.results && horrorData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default HorrorContainer;