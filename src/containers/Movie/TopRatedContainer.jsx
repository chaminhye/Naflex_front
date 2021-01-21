import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieTopRated, fetchTvTopRated } from '../../actions/index';
import Movie from '../../components/movies/Movie';


const TopRatedContainer = (props) => {

    const dispatch = useDispatch();
    // const genre = props.genre;
    // console.log('TopRatedContainer',props.genre);

    useEffect(() => {
        dispatch(fetchMovieTopRated());
    },[]);

    const topRatedData = useSelector(state => state.topRated.movies, []) || [];
console.log(topRatedData)
    return (
        <div>
            <p>오늘의 TOP 10 콘텐츠</p>
            <div className="movieContainer">
                { topRatedData.results && topRatedData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default TopRatedContainer;
