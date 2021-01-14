import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComedyMovies } from '../../actions/index';
import Movie from '../../components/movies/Movie';

const ComedyContainer = (props) => {

    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchComedyMovies());
        },);

        const comedyData = useSelector(state => state.comedy.movies, []) || [];

    return (
        <div>
            <p>코미디</p>
            <div className="movieContainer">
                { comedyData.results && comedyData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default ComedyContainer;