import React from 'react';
import TopRatedContainer from './TopRatedContainer';
import MovieScreenContainer from './MovieScreenContainer';
import HorrorContainer from './HorrorContainer';
import ComedyContainer from './ComedyContainer';
/**
 *      각 장르들에 대한 action을 dispatch해 컴포넌트에 데이터를 전달해 UI로 보여줄 수 있도록 action별로 파일을 만들었고
 *      Layout폴더에서는 배치될 순서대로 파일을 하나로 정리해주려고한다.
 */
const MovieLayout = () => {

    return (
        <div className="layout">
            <TopRatedContainer/>
            <MovieScreenContainer/>
            <HorrorContainer/>
            <ComedyContainer/>
        </div>
    )
}

export default MovieLayout;
