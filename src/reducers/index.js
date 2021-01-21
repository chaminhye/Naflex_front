import { combineReducers } from 'redux';
import TrendingReducer from './reducerTrending';
import NetflixOriginalsReducer from './reducerNetflixOriginals';
import TopRatedReducer from './reducerTopRated';
// import {reducerTopRated} from './reducerMovies';
import ActionMoviesReducer from './reducerActionMovies';
import ComedyMoviesReducer from './reducerComedyMovies';
import HorrorMoviesReducer from './reducerHorrorMovies';
import RomanceMoviesReducer from './reducerRomanceMovies';
import DocumentaryReducer from './reducerDocumentary';


/**
 *      src/reducers 폴더는 리듀서로 구성된 폴더이다.
 *        - index.js : combineReducers을 통해 만든 루트리듀서 파일.
 */
const rootReducer = combineReducers({
  trending: TrendingReducer,
  topRated: TopRatedReducer,
  netflixOriginals: NetflixOriginalsReducer,
  action: ActionMoviesReducer,
  comedy: ComedyMoviesReducer,
  horror: HorrorMoviesReducer,
  romance: RomanceMoviesReducer,
  documentary: DocumentaryReducer,
});

export default rootReducer;