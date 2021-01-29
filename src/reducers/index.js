import { combineReducers } from 'redux';
import TrendingReducer from './reducerTrending';
import TopRatedReducer from './reducerTopRated';
import ActionMoviesReducer from './reducerActionMovies';
import ComedyMoviesReducer from './reducerComedyMovies';
import HorrorMoviesReducer from './reducerHorrorMovies';
import RomanceMoviesReducer from './reducerRomanceMovies';
import PopularReducer from './reducerPopular';
import AiringTv from './reducerTvAiring';
import ScreenMovie from './reducerMovieScreen';
import KoreaTv from './reducerKoreaTv';

import reducerDetail from './reducerDetail';
import MyHistoryList from './reducerMyHistoryList';


/**
 *      src/reducers 폴더는 리듀서로 구성된 폴더이다.
 *        - index.js : combineReducers을 통해 만든 루트리듀서 파일.
 */
const rootReducer = combineReducers({
  detail : reducerDetail,
  trending: TrendingReducer,
  topRated: TopRatedReducer,
  popular: PopularReducer,
  airingTv: AiringTv,
  screenMovie: ScreenMovie,
  koreaTv : KoreaTv,
  action: ActionMoviesReducer,
  comedy: ComedyMoviesReducer,
  horror: HorrorMoviesReducer,
  romance: RomanceMoviesReducer,
  myList : MyHistoryList
});

export default rootReducer;