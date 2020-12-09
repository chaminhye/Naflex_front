import React from 'react';
import NetflixOriginalContainer from './NetflixOriginalContainer';
import TrendContainer from './TrendContainer';
import TopRatedContainer from './TopRatedContainer';
import ActionContainer from './ActionContainer';
import ComedyContainer from './ComedyContainer';
import HorrorContainer from './HorrorContainer';
import RomanceContainer from './RomanceContainer';
/**
 *      각 장르들에 대한 action을 dispatch해 컴포넌트에 데이터를 전달해 UI로 보여줄 수 있도록 action별로 파일을 만들었고
 *      Layout폴더에서는 배치될 순서대로 파일을 하나로 정리해주려고한다.
 */
const Layout = () => {

    return (
        <div className="layout">
            <NetflixOriginalContainer/>
            <ActionContainer/>
            <TrendContainer/>
            <TopRatedContainer/>
            <ComedyContainer/>
            <RomanceContainer/>
            <HorrorContainer/>
        </div>
    )
}

export default Layout;