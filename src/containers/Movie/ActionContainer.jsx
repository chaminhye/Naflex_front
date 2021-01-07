import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActionMovies } from '../../actions/index';
import Movie from '../../components/movies/Movie';
/**
 *      Api연동은 Redux를 통해 관리하고,
 *      Data를 가져오는 액션을 디스패치해 Movie컴포넌트에 해당 영화 정보를 props를 통해 전달해줬다. 
 */
const ActionContainer = (props) => {

    const dispatch = useDispatch();         // 컴포넌트 내에서 dispatch 를 사용 할 수 있다.

    useEffect(() => {
        dispatch(fetchActionMovies());
    }, []);

    const actionData = useSelector(state => state.action.movies, []) || [];     // 컴포넌트 내에서 리덕스 스토어 상태에 접근 가능.
    // console.log(actionData.results);


    return (
        <div>
            <p>Action Movies</p>
            <div className="movieContainer">
                { actionData.results && actionData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default ActionContainer;