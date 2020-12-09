import { combineReducers } from 'redux';
import TrendingReducer from './reducerTrending';
import NetflixOriginalsReducer from './reducerNetflixOriginals';
import TopRatedReducer from './reducerTopRated';
import ActionMoviesReducer from './reducerActionMovies';
import ComedyMoviesReducer from './reducerComedyMovies';
import HorrorMoviesReducer from './reducerHorrorMovies';
import RomanceMoviesReducer from './reducerRomanceMovies';
import DocumentaryReducer from './reducerDocumentary';


/**
 *      src/store/reducers 폴더는 리듀서로 구성된 폴더이다.
 *        - 리듀서는 액션메서드에서 변경한 상태를 받아 기존의 상태를 새로운 상태로 변경하는 일을 한다.
 *        - reducer폴더와 action폴더가 하나로 구성 가능(ducks 기법사용)  why? 분리하는 이유는 도메일별 구분하기 위해
 */
const rootReducer = combineReducers({
  trending: TrendingReducer,
  netflixOriginals: NetflixOriginalsReducer,
  topRated: TopRatedReducer,
  action: ActionMoviesReducer,
  comedy: ComedyMoviesReducer,
  horror: HorrorMoviesReducer,
  romance: RomanceMoviesReducer,
  documentary: DocumentaryReducer,
});

export default rootReducer;